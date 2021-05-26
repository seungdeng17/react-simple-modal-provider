import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';
import ModalBody from './ModalBody';

const context = createContext();
export const useModal1 = () => useContext(context);

const Modal1 = ({ children }) => {
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
            duration={300}
            customAnim={{
                type: 'transform',
                before: 'transform: scale(0)',
                after: 'transform: scale(1)',
            }}
        />
    );
};

export default Modal1;
