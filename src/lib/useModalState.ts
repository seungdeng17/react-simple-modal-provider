import { useState } from 'react';

const useModalState = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [isOpen, setOpen] = useState(false);
    return [isOpen, setOpen];
};

export default useModalState;
