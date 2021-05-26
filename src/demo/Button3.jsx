import { useModal3 } from './Modal3';

const Button3 = () => {
    const { open } = useModal3();

    return (
        <div>
            <button type="button" onClick={open}>
                Modal3 Open
            </button>
        </div>
    );
};

export default Button3;
