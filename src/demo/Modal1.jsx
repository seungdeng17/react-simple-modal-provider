import { useState, createContext, useContext } from 'react';
import SimpleModal from '../lib/SimpleModal';
import { modalAnimation } from '../lib/modalAnimation';
import ModalBody from './ModalBody';

const context = createContext();
export const useModal1 = () => useContext(context);

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <SimpleModal
            subElement={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={300}
            animation={modalAnimation.scaleUp}
        >
            <ModalBody />
        </SimpleModal>
    );
};

export default Modal1;
