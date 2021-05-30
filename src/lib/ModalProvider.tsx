import { createElement } from 'react';
import Modal from './Modal';

interface IModalProviderProps {
    children: React.ReactNode;
    value: typeof Modal[];
}

const ModalProvider = ({ children, value = [] }: IModalProviderProps): JSX.Element =>
    value.reduce((acc, curr) => createElement(curr, null, acc), children) as JSX.Element;

export default ModalProvider;
