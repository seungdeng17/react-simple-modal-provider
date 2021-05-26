import ModalProvider from './lib/ModalProvider';

import Modal1 from './demo/Modal1';
import Modal2 from './demo/Modal2';
import Button1 from './demo/Button1';
import Button2 from './demo/Button2';

const App = () => {
    const modals = [Modal1, Modal2];

    return (
        <ModalProvider modals={modals}>
            <Button1 />
            <Button2 />
        </ModalProvider>
    );
};

export default App;
