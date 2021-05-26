import CombineModal from './CombineModal';

const ModalProvider = ({ children, modals }) => <CombineModal modals={modals}>{children}</CombineModal>;

export default ModalProvider;
