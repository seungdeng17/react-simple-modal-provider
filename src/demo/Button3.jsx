import { useModal } from '../lib/modalContext';

const Button2 = () => {
    const { open } = useModal('Modal3');

    return (
        <div>
            <button type="button" onClick={open}>
                Modal3 Open
            </button>
        </div>
    );
};

export default Button2;
