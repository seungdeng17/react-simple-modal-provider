import { createContext, useContext } from 'react';
import { ERROR_MESSAGES } from './constants';

interface IModalContext {
    open: ({}: React.MouseEvent<HTMLElement> | {}) => void;
    close: () => void;
    [key: string]: any;
}

const contextMap = new Map();

const createModalContext = (id: string): React.Context<IModalContext> => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM_CONTEXT(id));
    if (contextMap.has(id)) return contextMap.get(id);
    const context = createContext<IModalContext>({} as IModalContext);
    contextMap.set(id, context);
    return context;
};

const useModal = (id: string): IModalContext => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM_USEMODAL(id));
    if (!contextMap.has(id)) throw new Error(ERROR_MESSAGES.MODAL_ID_NOT_EXIST(id));
    return useContext(contextMap.get(id));
};

export { createModalContext, useModal };
