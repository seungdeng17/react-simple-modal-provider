import { createElement } from 'react';
import Modal from './Modal';

interface IModalProviderProps {
    children: React.ReactNode;
    modals: typeof Modal[];
}

const ModalProvider = ({ children, modals = [] }: IModalProviderProps) =>
    modals.reduce((acc, curr) => createElement(curr, null, acc), children);

export default ModalProvider;
