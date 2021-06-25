import Modal, { useModalState, useModal, modalAnimation } from '../lib';
import Modal2Body from './Modal2Body';

const Modal2 = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useModalState();
    const { open: modal3Open } = useModal('Modal3');
    const onCloseHandler = () => setOpen(false);

    return (
        <Modal
            id={'Modal2'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            animation={modalAnimation.slideDown}
            radius={10}
            width={400}
            height={400}
            backgroundColor={'#f0f'}
            draggable={true}
        >
            <div style={{ width: 300, height: 300, backgroundColor: 'red' }}>
                <div>Modal2</div>
                <Modal2Body />
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
