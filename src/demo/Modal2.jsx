import { useState, useMemo } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext, useModal } from '../lib/modalContext';
import styled from '@emotion/styled';

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const context = useMemo(() => createModalContext('Modal2'), []);
    const { open: modal3Open } = useModal('Modal3');
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
                <button type="button" onClick={modal3Open}>
                    Modal3 Open
                </button>
            </Body>
        </Modal>
    );
};

const Body = styled.div`
    width: 600px;
    height: 200px;
    background-color: #00f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Modal2;
