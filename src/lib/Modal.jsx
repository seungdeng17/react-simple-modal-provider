import { useState, useCallback, useEffect } from 'react';
import ModalBody from './ModalBody';
import { stateBundler } from './utils';

const Modal = ({
    children,
    consumer,
    context,
    isOpen,
    setOpen,
    allowOutsideClick,
    duration,
    overlayColor,
    animation,
    vertical,
    horizontal,
}) => {
    duration = animation?.type && !duration ? 150 : duration;

    const [trigger, setTrigger] = useState(false);
    const open = useCallback(() => stateBundler([setOpen, setTrigger], true), []);
    const close = useCallback(() => setOpen(false), []);
    const keyUpHandler = useCallback(({ key }) => key === 'Escape' && close(), []);

    useEffect(() => {
        if (!isOpen) return window.removeEventListener('keyup', keyUpHandler);
        window.addEventListener('keyup', keyUpHandler);
    }, [isOpen]);

    return (
        <context.Provider value={{ open, close }}>
            {consumer}
            <ModalBody
                trigger={trigger}
                isOpen={isOpen}
                close={close}
                allowOutsideClick={allowOutsideClick}
                duration={duration}
                overlayColor={overlayColor}
                animation={animation}
                vertical={vertical}
                horizontal={horizontal}
            >
                {children}
            </ModalBody>
        </context.Provider>
    );
};

export default Modal;
