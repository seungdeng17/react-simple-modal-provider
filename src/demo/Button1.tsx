import { useModal } from '../lib/modalContext';

const Button1 = () => {
    const { open } = useModal('Modal1');

    return (
        <div>
            <button type="button" onClick={() => open({ test: 123 })}>
                Modal1 Open
            </button>
        </div>
    );
};

export default Button1;
