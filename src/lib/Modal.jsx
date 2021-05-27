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
}) => {
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <context.Provider value={{ open, close }}>
            {subElement}
            <ModalBody
                isOpen={isOpen}
                onRequestClose={close}
                allowOutsideClick={allowOutsideClick}
                duration={duration}
                overlayColor={overlayColor}
                animation={animation}
            >
                {children}
            </ModalBody>
        </context.Provider>
    );
};

export default Modal;
