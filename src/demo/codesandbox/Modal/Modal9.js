import { useState } from 'react';
import Modal, { useModalState, modalAnimation } from '../../../lib';
import Modal9Body from './Modal9Body';
import './modal.scss';

export default ({ children }) => {
    const [isOpen, setOpen] = useModalState();
    const [data, setData] = useState(null);

    const asyncOpen = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const n = Math.floor(Math.random() * 100) + 1;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${n}`);
        const json = await res.json();
        setData(json);
    };

    return (
        <Modal
            id={'Modal9'}
            consumer={children}
            isOpen={isOpen}
            setOpen={setOpen}
            duration={250}
            animation={modalAnimation.slideDown}
            asyncOpen={asyncOpen}
            // spinnerColor={'rgba(45, 52, 54, 0.6)'}
            // spinner={<span className="custom-spinner">🤪</span>}
            // spinner={false}
        >
            <div className="modal-body">
                <Modal9Body data={data} />
                🤓
            </div>
        </Modal>
    );
};
