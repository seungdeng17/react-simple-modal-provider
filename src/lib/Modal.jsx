import { useState, useEffect, useCallback } from 'react';
import ModalBody from './ModalBody';

const Modal = ({
    children,
    subElement,
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
    const open = useCallback(() => setOpen(true), []);
    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (!isOpen) return;
        setTrigger(true);
    }, [isOpen]);

    return (
        <context.Provider value={{ open, close }}>
            {subElement}
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
