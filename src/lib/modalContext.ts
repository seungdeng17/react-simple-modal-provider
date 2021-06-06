import { createContext, useContext } from 'react';
import { ERROR_MESSAGES } from './constants';

const contextMap = new Map();

const createModalContext = (id: string) => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM_CONTEXT(id));
    if (contextMap.has(id)) return contextMap.get(id);
    const context = createContext({});
    contextMap.set(id, context);
    return context;
};

const useModal = (id: string) => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM_USEMODAL(id));
    if (!contextMap.has(id)) throw new Error(ERROR_MESSAGES.MODAL_ID_NOT_EXIST(id));
    return useContext(contextMap.get(id));
};

export { createModalContext, useModal };
