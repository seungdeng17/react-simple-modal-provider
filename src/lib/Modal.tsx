import { useState, useCallback, useEffect, useMemo } from 'react';
import { createModalContext } from './modalContext';
import { modalAnimation } from './modalAnimation';
import { checkModalEssentialProps, stateBundler, hash, getModalStyle } from './utils';
import { IAnimation } from './type';
import Portal from './Portal';

interface IModalProps {
    children: React.ReactNode;
    id: string;
    consumer: React.ReactNode;
    state: boolean;
    setState: Function;
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
    state = false,
    setState,
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
    spinnerColor = '#93dbe9',
    draggable = false,
}: IModalProps) => {
    checkModalEssentialProps({ id, consumer, setState });

    duration = animation?.type && !duration ? 150 : duration;
    if (draggable && animation.type) animation = modalAnimation.scaleUp;

    const hashId = hash(id);
    const Context = useMemo(() => createModalContext(id), []);
    const [initialization, setInitialization] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);

    const open = useCallback(async () => {
        stateBundler([setState, setInitialization], true);
        if (!asyncOpen) return;
        setPending(true);
        await asyncOpen();
        setPending(false);
    }, []);
    const close = useCallback(() => setState(false), []);

    const keyUpHandler = useCallback(({ key }) => {
        if (key !== 'Escape') return;
        if ([...modalSet][modalSet.size - 1] !== id) return;
        close();
    }, []);

    useEffect(() => {
        if (!state) return window.removeEventListener('keyup', keyUpHandler);
        window.addEventListener('keyup', keyUpHandler);
        modalSet.add(id);
    }, [state]);

    return (
        <Context.Provider value={{ open, close }}>
            {consumer}
            <Portal
                id={id}
                hashId={hashId}
                modalSet={modalSet}
                initialization={initialization}
                pending={pending}
                state={state}
                close={close}
                allowClickOutside={allowClickOutside}
                asyncOpen={asyncOpen}
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
