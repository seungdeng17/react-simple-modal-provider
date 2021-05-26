import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';
import styled from 'styled-components';

const context = createContext();
export const useModal1 = () => useContext(context);

const Modal1 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    const body = (
        <Body>
            <div>Modal1</div>
            <button onClick={closeHandler} type="button">
                Modal1 Close
            </button>
        </Body>
    );

    return (
        <SimpleModal
            children={children}
            context={context}
            isOpen={isOpen}
            open={openHandler}
            close={closeHandler}
            body={body}
        />
    );
};

const Body = styled.div`
    width: 500px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Modal1;
