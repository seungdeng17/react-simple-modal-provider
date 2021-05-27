import { useModal } from 'simple-modal-provider';

const Button4 = () => {
    const { open } = useModal('Modal4');

    return (
        <div>
            <button type="button" onClick={open}>
                Modal4 Open
            </button>
        </div>
    );
};

export default Button4;
