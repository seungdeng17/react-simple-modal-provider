import { useState } from 'react';
import { Modal, createModalContext, modalAnimation } from 'simple-modal-provider';

const context = createModalContext('Modal4');

const Modal4 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Modal
            subElement={children}
            isOpen={isOpen}
            setOpen={setOpen}
            context={context}
            animation={modalAnimation.slideDown}
            duration={300}
        >
            <div>Modal 4</div>
        </Modal>
    );
};

export default Modal4;
