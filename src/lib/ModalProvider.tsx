import { createElement } from 'react';
import Modal from './Modal';

interface IModalProviderProps {
    children: React.ReactNode;
    modals: typeof Modal[];
}

const ModalProvider = ({ children, modals = [] }: IModalProviderProps): JSX.Element =>
    modals.reduce((acc, curr) => createElement(curr, null, acc), children) as JSX.Element;

export default ModalProvider;
