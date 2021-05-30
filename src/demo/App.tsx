import ModalProvider from '../lib/ModalProvider';

import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';

const App = () => {
    const modals = [Modal1, Modal2, Modal3];

    return (
        <ModalProvider value={modals}>
            <Button1 />
            <Button2 />
            <Button3 />
        </ModalProvider>
    );
};

export default App;
