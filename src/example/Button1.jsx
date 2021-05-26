import { useModal1 } from './Modal1';

const Button1 = () => {
    const { open } = useModal1();

    return (
        <div>
            <button type="button" onClick={open}>
                Modal1 Open
            </button>
        </div>
    );
};

export default Button1;
