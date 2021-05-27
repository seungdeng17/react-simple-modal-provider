import { createContext, useContext } from 'react';

const contextMap = new Map();

const createModalContext = (key) => {
    if (!key) throw new Error(`react-simple-modal-provider: Error! Key "${key}" is not valid`);
    if (contextMap.has(key)) throw new Error(`react-simple-modal-provider: Error! Key "${key}" is duplicated`);
    const context = createContext();
    contextMap.set(key, context);
    return context;
};

const useModal = (key) => {
    if (!key) throw new Error(`react-simple-modal-provider: Error! Key "${key}" is not valid`);
    if (!contextMap.has(key)) throw new Error(`react-simple-modal-provider: Error! Key "${key}" doesn't exist.`);
    return useContext(contextMap.get(key));
};

export { createModalContext, useModal };
