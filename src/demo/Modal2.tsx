import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { useModal } from '../lib/modalContext';

const Modal2 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const { open: modal3Open } = useModal('Modal3');
    const onCloseHandler = () => setState(false);

    return (
        <Modal
            id={'Modal2'}
            consumer={children}
            state={state}
            setState={setState}
            animation={modalAnimation.slideDown}
            radius={10}
            drag={true}
        >
            <div className="modal-draggable" style={{ width: 300, height: 300, backgroundColor: 'red' }}>
                <div>Modal2</div>
                <button onClick={onCloseHandler} type="button">
                    Modal2 Close
                </button>
                <button type="button" onClick={modal3Open}>
                    Modal3 Open
                </button>
            </div>
        </Modal>
    );
};

export default Modal2;
