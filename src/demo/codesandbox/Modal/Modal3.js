import Modal, { useModalState, modalAnimation } from '../../../lib';
import './modal.scss';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();

    return (
        <Modal
            id={'Modal3'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={250}
            animation={modalAnimation.slideDown}
            draggable={true}
        >
            <div className="modal-body">
                😍
                <button onClick={() => setOpen(false)}>Close</button>
            </div>
        </Modal>
    );
};
