import ModalProvider from '../lib/ModalProvider';

import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Button1 from './Button1';
import Button2 from './Button2';

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
