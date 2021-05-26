import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';
import styled from 'styled-components';

const ModalWrap = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const context = createContext();
export const useModal2 = () => useContext(context);

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    const body = (
        <ModalWrap>
            <div>Modal2</div>
            <button onClick={close} type="button">
                Modal2 Close
            </button>
        </ModalWrap>
    );

    return (
        <SimpleModal context={context} isOpen={isOpen} open={open} close={close} body={body}>
            {children}
        </SimpleModal>
    );
};

export default Modal2;
