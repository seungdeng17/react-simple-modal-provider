import { createElement } from 'react';

const ModalProvider = ({ children, modals = [] }) => modals.reduce((acc, curr) => createElement(curr, null, acc), children);

export default ModalProvider;
