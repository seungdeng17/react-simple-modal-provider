import SimpleModalBody from './SimpleModalBody';

const SimpleModal = ({
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
            <SimpleModalBody
                isOpen={isOpen}
                onRequestClose={close}
                allowOutsideClick={allowOutsideClick}
                duration={duration}
                overlayColor={overlayColor}
                animation={animation}
            >
                {children}
            </SimpleModalBody>
        </context.Provider>
    );
};

export default SimpleModal;
