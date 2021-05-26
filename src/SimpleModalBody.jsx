import * as ReactModal from 'react-modal';

const SimpleModalBody = ({ isOpen, onRequestClose, body }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    border: 'none',
                    borderRadius: '0',
                    padding: '0',
                    width: 'fit-content',
                    height: 'fit-content',
                },
            }}
        >
            {body}
        </ReactModal>
    );
};

export default SimpleModalBody;
