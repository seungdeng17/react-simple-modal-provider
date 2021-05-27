import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext } from '../lib/modalContext';
import styled from '@emotion/styled';

const context = createModalContext('Modal2');

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const onCloseHandler = () => setOpen(false);

    return (
        <Modal
            subElement={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            animation={modalAnimation.scaleUp}
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