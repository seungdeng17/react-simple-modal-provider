import { useModal } from '../../lib';
import './panel.scss';

export const GlobalPanel = () => {
    const { open: openModal1 } = useModal('Modal1');
    const { open: openModal2 } = useModal('Modal2');
    const { open: openModal3 } = useModal('Modal3');
    const { open: openModal4 } = useModal('Modal4');
    const { open: openModal5 } = useModal('Modal5');

    return (
        <div className="container">
            <div>
                <p>🚗 Modal 1: Default Modal</p>
                <button onClick={openModal1}>Default</button>
            </div>
            <div>
                <p>⚽️ Modal 2~4: Animation Modal</p>
                <p>🍟 + Draggable</p>
                <button onClick={openModal2}>Scale Up</button>
                <button onClick={openModal3}>Slide Down</button>
                <p>🍖 Disallowed Click Outside</p>
                <button onClick={openModal4}>Slide Up</button>
            </div>
            <div>
                <p>🍺 Modal 5: Custom-animation Modal</p>
                <button onClick={openModal5}>Custom</button>
            </div>
        </div>
    );
};

export const LocalPanel = () => {
    const { open: openModal2 } = useModal('Modal2');
    const { open: openModal3 } = useModal('Modal3');
    const { open: openModal4 } = useModal('Modal4');
    const { open: openModal6 } = useModal('Modal6');
    const { open: openModal9 } = useModal('Modal9');
    const { open: openModal10 } = useModal('Modal10');

    return (
        <div className="container">
            <div>
                <p>⚽️ Modal 2~4: Animation Modal</p>
                <p>🍟 + Draggable</p>
                <button onClick={openModal2}>Scale Up</button>
                <button onClick={openModal3}>Slide Down</button>
                <p>🍖 Disallowed Click Outside</p>
                <button onClick={openModal4}>Slide Up</button>
            </div>
            <div>
                <p>👨‍👩‍👦 Modal 6~8: Multiple Modal</p>
                <button onClick={openModal6}>Multiple</button>
            </div>
            <div>
                <p>🌍 Modal 9~10: Async Modal</p>
                <button onClick={openModal9}>Async 1</button>
                <button onClick={openModal10}>Async 2</button>
            </div>
        </div>
    );
};

export default () => {
    const { open: openModal1 } = useModal('Modal1');
    const { open: openModal2 } = useModal('Modal2');
    const { open: openModal3 } = useModal('Modal3');
    const { open: openModal4 } = useModal('Modal4');
    const { open: openModal5 } = useModal('Modal5');
    const { open: openModal6 } = useModal('Modal6');
    const { open: openModal9 } = useModal('Modal9');
    const { open: openModal10 } = useModal('Modal10');

    return (
        <div className="container">
            <div>
                <p>🚗 Modal 1: Default Modal</p>
                <button onClick={openModal1}>Default</button>
            </div>
            <div>
                <p>⚽️ Modal 2~4: Animation Modal</p>
                <p>🍟 + Draggable</p>
                <button onClick={openModal2}>Scale Up</button>
                <button onClick={openModal3}>Slide Down</button>
                <p>🍖 Disallowed Click Outside</p>
                <button onClick={openModal4}>Slide Up</button>
            </div>
            <div>
                <p>🍺 Modal 5: Custom-animation Modal</p>
                <button onClick={openModal5}>Custom</button>
            </div>
            <div>
                <p>👨‍👩‍👦 Modal 6~8: Multiple Modal</p>
                <button onClick={openModal6}>Multiple</button>
            </div>
            <div>
                <p>🌍 Modal 9~10: Async Modal</p>
                <button onClick={openModal9}>Async 1</button>
                <button onClick={openModal10}>Async 2</button>
            </div>
        </div>
    );
};
