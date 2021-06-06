import { useModal } from '../lib';

const Modal1Body = ({ data }) => {
    const { test } = useModal('Modal1');
    console.log(test);

    return (
        <div>
            <p>Modal Body</p>
            <p>{data.title}</p>
        </div>
    );
};

export default Modal1Body;
