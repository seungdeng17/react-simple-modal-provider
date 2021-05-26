import SimpleModalBody from './SimpleModalBody';

const SimpleModal = ({ children, context, isOpen, open, close, body }) => {
    return (
        <context.Provider value={{ open, close }}>
            {children}
            <SimpleModalBody isOpen={isOpen} onRequestClose={close} body={body} />
        </context.Provider>
    );
};

export default SimpleModal;
