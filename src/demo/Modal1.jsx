import { useState, useMemo } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext } from '../lib/modalContext';
import ModalBody from './ModalBody';

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const context = useMemo(() => createModalContext('Modal1'), []);

    return (
        <Modal
            subElement={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={300}
            animation={modalAnimation.scaleUp}
        >
            <ModalBody />
        </Modal>
    );
};

export default Modal1;
