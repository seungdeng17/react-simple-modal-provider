import { useState } from 'react';

const useModalState = () => {
    const [isOpen, setOpen] = useState(false);

    return {
        isOpen,
        setOpen,
    };
};

export default useModalState;
