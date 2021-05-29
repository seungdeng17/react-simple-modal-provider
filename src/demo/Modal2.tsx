import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { useModal } from '../lib/modalContext';
import styled from '@emotion/styled';

const Modal2 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const { open: modal3Open } = useModal('Modal3');
    const onCloseHandler = () => setState(false);

    return (
        <Modal id={'Modal2'} consumer={children} state={state} setState={setState} animation={modalAnimation.slideDown}>
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
