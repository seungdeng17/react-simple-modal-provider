import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createElement } from 'react';
import Modal from './Modal';

interface IModalProviderProps {
    children: React.ReactNode;
    modals: typeof Modal[];
}

const ModalProvider = ({ children, modals = [] }: IModalProviderProps): ReactJSXElement =>
    modals.reduce((acc, curr) => createElement(curr, null, acc), children) as ReactJSXElement;

export default ModalProvider;
