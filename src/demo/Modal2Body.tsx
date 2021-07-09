import { useModalProps } from '../lib';

const Modal2Body = () => {
    const { testModal2 } = useModalProps('Modal2');

    return (
        <div>
            <p>Modal Body</p>
            <p>{testModal2}</p>
        </div>
    );
};

export default Modal2Body;
