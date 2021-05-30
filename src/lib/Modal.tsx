import { useState, useCallback, useEffect, useMemo } from 'react';
import { createModalContext } from './modalContext';
import { stateBundler, hash } from './utils';
import { IOptionalProps } from './type';
import Portal from './Portal';

interface IModalProps extends IOptionalProps {
    children: React.ReactNode;
    id: string;
    consumer: React.ReactNode;
    state: boolean;
    setState: Function;
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
}: IModalProps) => {
    if (typeof id !== 'string') {
        throw new Error('react-simple-modal-provider: Modal Error! id props must be a string type.');
    }
    if (!id || !consumer || !setState) {
        throw new Error(
            'react-simple-modal-provider: Modal Error! Not enough essential props data. Check the Modal props. (id, consumer, state, setState)'
        );
    }

    duration = animation?.type && !duration ? 150 : duration;

    const hashId = hash(id);
    const Context = useMemo(() => createModalContext(id), []);
    const [initialization, setInitialization] = useState<boolean>(false);

    const open = useCallback(async () => {
        asyncOpen && (await asyncOpen());
        stateBundler([setState, setInitialization], true);
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
                state={state}
                close={close}
                allowClickOutside={allowClickOutside}
                duration={duration}
                overlayClassName={{
                    base: 'overlay-base',
                    afterOpen: 'overlay-after',
                    beforeClose: 'overlay-before',
                }}
                className={{
                    base: 'content-base',
                    afterOpen: 'content-after',
                    beforeClose: 'content-before',
                }}
                modalStyle={`
                .css-${hashId} .overlay-base {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    outline: 0;
                    z-index: 99999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0);
                    transition-property: background-color, opacity;
                    transition-timing-function: ease-in-out;
                    transition-duration: ${duration}ms;
                }

                .css-${hashId} .overlay-after {
                    background-color: ${overlayColor};
                }

                .css-${hashId} .overlay-before {
                    background-color: rgba(0, 0, 0, 0);
                }

                .css-${hashId} .content-base {
                    position: relative;
                    bottom: ${vertical}px;
                    left: ${horizontal}px;
                    overflow: hidden;
                    outline: 0;
                    transition-timing-function: ease-in-out;
                    transition-property: ${animation.type};
                    ${animation.base};
                    transition-duration: ${duration}ms;

                    min-width: ${width}px;
                    min-height: ${height}px;
                    border-radius: ${radius}px;
                    background-color: ${backgroundColor};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .css-${hashId} .content-after {
                    ${animation.after};
                }

                .css-${hashId} .content-before {
                    ${animation.before};
                }
            `}
            >
                {children}
            </Portal>
        </Context.Provider>
    );
};

export default Modal;
