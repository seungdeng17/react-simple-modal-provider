import Modal, { useModalState, modalAnimation } from '../../../lib';
import Modal10Body from './Modal10Body';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();

    return (
        <Modal
            id={'Modal10'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={250}
            animation={modalAnimation.scaleUp}
            draggable={true}
        >
            <Modal10Body />
        </Modal>
    );
};
