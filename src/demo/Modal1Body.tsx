import { useModal } from '../lib';

const Modal1Body = ({ data }) => {
    const { testModal1 } = useModal('Modal1');

    return (
        <div>
            <p>Modal Body</p>
            <p>{testModal1}</p>
            <p>{data.title}</p>
        </div>
    );
};

export default Modal1Body;
