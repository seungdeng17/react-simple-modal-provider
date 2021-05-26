import { useModal2 } from './Modal2';

const Button2 = () => {
    const { open } = useModal2();

    return (
        <div>
            <button type="button" onClick={open}>
                Modal2 Open
            </button>
        </div>
    );
};

export default Button2;
