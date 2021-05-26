import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';

const context = createContext();
export const useModal1 = () => useContext(context);

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    const body = (
        <div>
            <div>Modal1</div>
            <button onClick={close} type="button">
                Modal1 Close
            </button>
        </div>
    );

    return (
        <SimpleModal context={context} isOpen={isOpen} open={open} close={close} body={body}>
            {children}
        </SimpleModal>
    );
};

export default Modal1;
