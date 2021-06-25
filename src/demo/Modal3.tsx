import Modal, { useModalState, modalAnimation } from '../lib';

const Modal3 = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useModalState();
    const onCloseHandler = () => setOpen(false);

    return (
        <Modal
            id={'Modal3'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
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

export default Modal3;
