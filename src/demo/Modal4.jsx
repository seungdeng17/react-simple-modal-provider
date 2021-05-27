import { useState, useMemo } from 'react';
import { Modal, createModalContext, modalAnimation } from 'simple-modal-provider';

const Modal4 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const context = useMemo(() => createModalContext('Modal4'), []);

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
