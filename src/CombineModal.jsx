import { createElement } from 'react';

const CombineModal = ({ children, modals }) => modals.reduce((acc, curr) => createElement(curr, null, acc), children);

export default CombineModal;
