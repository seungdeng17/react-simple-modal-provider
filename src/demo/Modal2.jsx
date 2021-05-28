import { useState, useMemo } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext } from '../lib/modalContext';
import styled from '@emotion/styled';

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const context = useMemo(() => createModalContext('Modal2'), []);
    const onCloseHandler = () => setOpen(false);

    return (
        <Modal
            consumer={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            animation={modalAnimation.slideDown}
        >
            <Body>
                <div>Modal2</div>
                <button onClick={onCloseHandler} type="button">
                    Modal2 Close
                </button>
            </Body>
        </Modal>
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

export default Modal2;
