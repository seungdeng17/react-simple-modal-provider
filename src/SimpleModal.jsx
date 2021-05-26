import SimpleModalBody from './SimpleModalBody';

const SimpleModal = ({
    children,
    context,
    isOpen,
    setOpen,
    body,
    allowOutsideClick,
    duration,
    overlayColor,
    anim,
    customAnim,
}) => {
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <context.Provider value={{ open, close }}>
            {children}
            <SimpleModalBody
                isOpen={isOpen}
                onRequestClose={close}
                body={body}
                allowOutsideClick={allowOutsideClick}
                duration={duration}
                overlayColor={overlayColor}
                anim={anim}
                customAnim={customAnim}
            />
        </context.Provider>
    );
};

export default SimpleModal;
