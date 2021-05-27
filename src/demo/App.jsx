import { ModalProvider } from 'simple-modal-provider';

import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';

import ReactModal from '../lib/ReactModal';

const App = () => {
    const modals = [Modal1, Modal2];
    // const modals = [Modal1, Modal2, Modal3, Modal4];

    return (
        <ModalProvider modals={modals}>
            <Button1 />
            <Button2 />
            {/* <Button3 /> */}
            {/* <Button4 /> */}
            {/* <ReactModal /> */}
        </ModalProvider>
    );
};

export default App;
