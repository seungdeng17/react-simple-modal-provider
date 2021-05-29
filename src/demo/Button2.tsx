import { useModal } from '../lib/modalContext';

const Button2 = () => {
    const { open } = useModal('Modal2');

    return (
        <div>
            <button type="button" onClick={open}>
                Modal2 Open
            </button>
        </div>
    );
};

export default Button2;
