import Modal, { useModalState, modalAnimation } from '../../../lib';
import './modal.scss';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();

    return (
        <Modal
            id={'Modal8'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={250}
            animation={modalAnimation.slideUp}
        >
            <div style={{ width: '6em', height: '4em', fontSize: '2em' }} className="modal-body">
                🥳
            </div>
        </Modal>
    );
};
