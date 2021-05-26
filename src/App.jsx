import ModalProvider from './ModalProvider';

import Modal1 from './example/Modal1';
import Modal2 from './example/Modal2';
import Button1 from './example/Button1';
import Button2 from './example/Button2';

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
