import { useState } from 'react';
import SimpleModal from '../lib/SimpleModal';
import { modalAnimation } from '../lib/modalAnimation';
import { createModalContext } from '../lib/modalContext';
import styled from '@emotion/styled';

const context = createModalContext('Modal2');

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const onCloseHandler = () => setOpen(false);

    return (
        <SimpleModal
            subElement={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            animation={modalAnimation.scaleUp}
            duration={300}
        >
            <Body>
                <div>Modal2</div>
                <button onClick={onCloseHandler} type="button">
                    Modal2 Close
                </button>
            </Body>
        </SimpleModal>
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
