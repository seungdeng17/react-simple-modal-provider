import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';
import ModalBody from './ModalBody';

const context = createContext();
export const useModal2 = () => useContext(context);

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    return (
        <SimpleModal
            children={children}
            context={context}
            isOpen={isOpen}
            open={openHandler}
            close={closeHandler}
            body={<ModalBody />}
        />
    );
};

export default Modal2;
