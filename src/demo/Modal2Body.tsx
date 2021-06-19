import { useModal } from '../lib';

const Modal2Body = () => {
    const { testModal2 } = useModal('Modal2');

    return (
        <div>
            <p>Modal Body</p>
            <p>{testModal2}</p>
        </div>
    );
};

export default Modal2Body;
