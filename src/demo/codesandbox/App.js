import { ModalProvider } from '../../lib';
import modals, { globalModals, localModals } from './Modal';
import Panel, { GlobalPanel, LocalPanel } from './Panel';
import './app.scss';

export default function App() {
    return (
        <ModalProvider value={globalModals}>
            <GlobalPanel />
            <ModalProvider value={localModals}>
                <LocalPanel />
            </ModalProvider>
        </ModalProvider>
    );
}
