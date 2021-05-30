import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
// import styled from '@emotion/styled';

const Modal2 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const onCloseHandler = () => setState(false);

    return (
        <Modal
            id={'Modal3'}
            consumer={children}
            state={state}
            setState={setState}
            animation={modalAnimation.slideUp}
            radius={10}
        >
            <div>
                <div>Modal3</div>
                <button onClick={onCloseHandler} type="button">
                    Modal3 Close
                </button>
            </div>
        </Modal>
    );
};

// const Body = styled.div`
//     width: 500px;
//     height: 300px;
//     background-color: #fff;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `;

export default Modal2;
