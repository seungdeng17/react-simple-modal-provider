import { createContext, useContext } from 'react';

const contextMap = new Map();

const createModalContext = (key) => {
    if (!key) throw new Error(`react-simple-modal-provider: context Error! Key "${key}" is not valid`);
    if (contextMap.has(key)) return contextMap.get(key);
    const context = createContext();
    contextMap.set(key, context);
    return context;
};

const useModal = (key) => {
    if (!key) throw new Error(`react-simple-modal-provider: useModal Error! Key "${key}" is not valid`);
    if (!contextMap.has(key)) throw new Error(`react-simple-modal-provider: useModal Error! Key "${key}" doesn't exist. Check the order of modals props passed to "ModalProvider".`);
    return useContext(contextMap.get(key));
};

export { createModalContext, useModal };
