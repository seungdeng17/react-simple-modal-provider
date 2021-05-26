import { useState, createContext, useContext } from 'react';
import { SimpleModal, modalAnimation } from 'simple-modal-provider';
import styled from '@emotion/styled';

const context = createContext();
export const useModal3 = () => useContext(context);

const Modal3 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const onCloseHandler = () => setOpen(false);

    const body = (
        <Body>
            <div>Modal3</div>
            <button onClick={onCloseHandler} type="button">
                Modal3 Close
            </button>
        </Body>
    );

    return (
        <SimpleModal
            children={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            body={body}
            animation={modalAnimation.slideDown}
            duration={300}
        />
    );
};

const Body = styled.div`
    width: 600px;
    height: 300px;
    background-color: #f0f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Modal3;
