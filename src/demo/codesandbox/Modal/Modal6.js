import Modal, { useModalState, useModal, modalAnimation } from '../../../lib';
import './modal.scss';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();
    const { open: openModal7 } = useModal('Modal7');

    return (
        <Modal
            id={'Modal6'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={250}
            animation={modalAnimation.scaleUp}
        >
            <div style={{ width: '6em', height: '4em', fontSize: '3em' }} className="modal-body" onClick={openModal7}>
                🤩
                <p style={{ margin: 10, fontSize: 30 }}>Click Me!</p>
            </div>
        </Modal>
    );
};
