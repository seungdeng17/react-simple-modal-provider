import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { useModal } from '../lib/modalContext';
import ModalBody from './ModalBody';

const Modal1 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const { open: modal2Open } = useModal('Modal2');
    const { open: modal3Open } = useModal('Modal3');

    return (
        <Modal
            id={'Modal1'}
            consumer={children}
            state={state}
            setState={setState}
            duration={300}
            animation={modalAnimation.scaleUp}
            width={300}
            height={200}
            backgroundColor={'#fff'}
        >
            <ModalBody />
            <button type="button" onClick={modal2Open}>
                Modal2 Open
            </button>
            <button type="button" onClick={modal3Open}>
                Modal3 Open
            </button>
        </Modal>
    );
};

export default Modal1;
