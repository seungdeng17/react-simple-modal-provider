import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';
import { useModal } from '../lib/modalContext';
import Modal1Body from './Modal1Body';

const Modal1 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const { open: modal2Open } = useModal('Modal2');
    const { open: modal3Open } = useModal('Modal3');

    const [data, setData] = useState(null);

    const asyncOpen = async () => {
        try {
            await new Promise((r) => setTimeout(r, 500));
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
            state={state}
            setState={setState}
            duration={300}
            animation={modalAnimation.scaleUp}
            width={300}
            height={300}
            radius={10}
            backgroundColor={'#fff'}
            asyncOpen={asyncOpen}
        >
            <Modal1Body data={data} />
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
