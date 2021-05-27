import { useState, useMemo } from 'react';
import { Modal, createModalContext, modalAnimation } from 'simple-modal-provider';
import styled from '@emotion/styled';

const Modal3 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const context = useMemo(() => createModalContext('Modal3'), []);
    const onCloseHandler = () => setOpen(false);

    return (
        <Modal
            subElement={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            animation={modalAnimation.slideDown}
            duration={300}
        >
            <Body>
                <div>Modal3</div>
                <button onClick={onCloseHandler} type="button">
                    Modal3 Close
                </button>
            </Body>
        </Modal>
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
