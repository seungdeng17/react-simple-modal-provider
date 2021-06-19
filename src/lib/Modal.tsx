import { useState, useCallback, useEffect, useMemo } from 'react';
import { createModalContext } from './modalContext';
import { modalAnimation } from './modalAnimation';
import { checkRequiredProps, checkCustomStyle, hash, getModalStyle, checkPropsCondition } from './utils';
import { IAnimation } from './type';
import Portal from './Portal';

interface IModalProps {
    children: React.ReactNode;
    id: string;
    consumer: React.ReactNode;
    isOpen: boolean;
    setOpen: Function;
    allowClickOutside?: boolean;
    duration?: number;
    overlayColor?: string;
    animation?: IAnimation;
    vertical?: number;
    horizontal?: number;
    width?: number;
    height?: number;
    radius?: number;
    backgroundColor?: string;
    asyncOpen?: Function;
    spinner?: JSX.Element | boolean;
    spinnerColor?: string;
    draggable?: boolean;
}

const modalSet: Set<string> = new Set();

const Modal = ({
    children,
    id,
    consumer,
    isOpen,
    setOpen,
    allowClickOutside = true,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    animation = { type: '', base: '', before: '', after: '' },
    vertical = 0,
    horizontal = 0,
    width = 0,
    height = 0,
    radius = 0,
    backgroundColor = 'transparent',
    asyncOpen,
    spinner,
    spinnerColor = '#000',
    draggable = false,
}: IModalProps) => {
    checkRequiredProps({ id, consumer, isOpen, setOpen });
    checkCustomStyle({ id, width, height, backgroundColor });

    duration = animation?.type && !duration ? 150 : duration;
    if (draggable && animation.type.match(/top|bottom|left|right/)) animation = modalAnimation.scaleUp;

    const hashId = hash(id);

    const Context = useMemo(() => createModalContext(id), []);
    const [initialization, setInitialization] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);

    const INIT_CUSTOM_PROPS = {};
    const [customProps, setCustomProps] = useState<{ [key: string]: any }>(INIT_CUSTOM_PROPS);
    const setCustomPropsWithCheckPropsCondition = useCallback(
        (props) => {
            if (checkPropsCondition(props)) return setCustomProps(props);
            if (customProps !== INIT_CUSTOM_PROPS) return setCustomProps(INIT_CUSTOM_PROPS);
        },
        [customProps]
    );

    const open = useCallback(
        async (props) => {
            setOpen(true);
            setCustomPropsWithCheckPropsCondition(props);
            if (!initialization) setInitialization(true);
            if (!asyncOpen) return;
            setPending(true);
            await asyncOpen();
            setPending(false);
        },
        [customProps]
    );

    const close = useCallback(() => setOpen(false), []);

    const keyUpHandler = useCallback(({ key }) => {
        if (key !== 'Escape') return;
        if ([...modalSet][modalSet.size - 1] !== id) return;
        close();
    }, []);

    useEffect(() => {
        if (!isOpen) return window.removeEventListener('keyup', keyUpHandler);
        window.addEventListener('keyup', keyUpHandler);
        modalSet.add(id);
    }, [isOpen]);

    const providerValues = useMemo(
        () => ({
            open,
            close,
            ...customProps,
        }),
        [customProps]
    );

    return (
        <Context.Provider value={providerValues}>
            {consumer}
            <Portal
                id={id}
                hashId={hashId}
                modalSet={modalSet}
                initialization={initialization}
                pending={pending}
                isOpen={isOpen}
                close={close}
                allowClickOutside={allowClickOutside}
                spinner={spinner}
                spinnerColor={spinnerColor}
                duration={duration}
                modalStyle={getModalStyle({
                    hashId,
                    duration,
                    overlayColor,
                    vertical,
                    horizontal,
                    animation,
                    width,
                    height,
                    radius,
                    backgroundColor,
                })}
                draggable={draggable}
            >
                {children}
            </Portal>
        </Context.Provider>
    );
};

export default Modal;
