import { ModalProvider, modalAnimation, SimpleModal, SimpleModalBody } from 'simple-modal-provider';

import Modal1 from './demo/Modal1';
import Modal2 from './demo/Modal2';
import Modal3 from './demo/Modal3';
import Button1 from './demo/Button1';
import Button2 from './demo/Button2';
import Button3 from './demo/Button3';

const App = () => {
    const modals = [
        Modal1, 
        Modal2, 
        Modal3
    ];

    console.log(ModalProvider);
    console.log(modalAnimation);
    console.log(SimpleModal);
    console.log(SimpleModalBody);

    return (
        <ModalProvider modals={modals}>
            <Button1 />
            <Button2 />
            <Button3 />
        </ModalProvider>
    );
};

export default App;
