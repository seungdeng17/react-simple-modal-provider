import Modal, { useModalState } from '../../../lib';
import './modal.scss';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();

    return (
        <Modal id={'Modal1'} consumer={children} isOpen={isOpen} setOpen={setOpen}>
            <div className="modal-body">😆</div>
        </Modal>
    );
};
