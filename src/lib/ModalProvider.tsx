import { createElement } from 'react';
import Modal from './Modal';
import { ERROR_MESSAGES } from './constants';

interface IModalProviderProps {
    children: React.ReactNode;
    value: typeof Modal[];
}

const ModalProvider = ({ children, value = [] }: IModalProviderProps): JSX.Element => {
    if (!value.length) console.error(ERROR_MESSAGES.MODAL_PROVIDER_EMPTY_VALUE);
    return value.reduce((acc, curr) => createElement(curr, null, acc), children) as JSX.Element;
};

export default ModalProvider;
