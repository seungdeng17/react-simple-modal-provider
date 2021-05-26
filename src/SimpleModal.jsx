import SimpleModalBody from './SimpleModalBody';

const SimpleModal = ({
    children,
    context,
    isOpen,
    open,
    close,
    body,
    allowOutsideClick,
    duration,
    overlayColor,
    anim,
    customAnim,
}) => {
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
