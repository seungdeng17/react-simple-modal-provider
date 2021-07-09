import { useState } from 'react';
import Modal, { useModalState, useModal, modalAnimation } from '../lib/';
import Modal1Body from './Modal1Body';

const Modal1 = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useModalState();
    const { open: modal2Open } = useModal('Modal2');
    const { open: modal3Open } = useModal('Modal3');

    const [data, setData] = useState(null);

    const asyncOpen = async () => {
        try {
            await new Promise((r) => setTimeout(r, 10));
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const json = await res.json();
            setData(json);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Modal
            id={'Modal1'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={300}
            animation={modalAnimation.scaleUp}
            asyncOpen={asyncOpen}
            width={300}
            height={300}
            radius={10}
            backgroundColor={'#fff'}
            draggable={true}
        >
            <div>
                <Modal1Body data={data} />
                <button type="button" onClick={() => modal2Open({ testModal2: 'TEST MODAL2' })}>
                    Modal2 Open
                </button>
                <button type="button" onClick={modal3Open}>
                    Modal3 Open
                </button>
            </div>
        </Modal>
    );
};

export default Modal1;
