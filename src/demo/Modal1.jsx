import { useState, createContext, useContext } from 'react';
import SimpleModal from '../lib/SimpleModal';
import ModalBody from './ModalBody';

const context = createContext();
export const useModal1 = () => useContext(context);

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <SimpleModal
            children={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            body={<ModalBody />}
            duration={300}
            animation={{
                type: 'transform',
                base: 'transform: scale(0)',
                before: 'transform: scale(0)',
                after: 'transform: scale(1)',
            }}
        />
    );
};

export default Modal1;
