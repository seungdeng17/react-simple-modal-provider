import { createContext, useContext } from 'react';

interface IModalContext {
    open: () => void;
    close: () => void;
}

const contextMap = new Map();

const createModalContext = (key: string): React.Context<IModalContext> => {
    if (!key) {
        throw new Error(`react-simple-modal-provider: context Error! Key "${key}" is not valid`);
    }
    if (contextMap.has(key)) return contextMap.get(key);
    const context = createContext<IModalContext>({ open, close });
    contextMap.set(key, context);
    return context;
};

const useModal = (key: string): IModalContext => {
    if (!key) {
        throw new Error(`react-simple-modal-provider: useModal Error! Key "${key}" is not valid`);
    }
    if (!contextMap.has(key)) {
        throw new Error(
            `react-simple-modal-provider: useModal Error! Key "${key}" doesn't exist. Check the order of value props passed to "ModalProvider".`
        );
    }
    return useContext(contextMap.get(key));
};

export { createModalContext, useModal };
