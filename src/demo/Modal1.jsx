import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext } from '../lib/modalContext';
import ModalBody from './ModalBody';

const context = createModalContext('Modal1');

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

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
