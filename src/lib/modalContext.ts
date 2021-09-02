import { createContext, useContext } from 'react';
import { ERROR_MESSAGES } from './constants';

interface IModalContext {
    open: ({}: React.MouseEvent<HTMLElement> | {}) => void;
    close: () => void;
}

interface IModalContextProps {
    [key: string]: any;
}

const createModalContext = (id: string): [React.Context<IModalContext>, React.Context<IModalContextProps>] => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM_CONTEXT(id));
    if (contextMap.has(id)) return contextMap.get(id);
    const context = createContext<IModalContext>({} as IModalContext);
    const contextProps = createContext<IModalContextProps>({} as IModalContextProps);
    contextMap.set(id, context);
    contextPropsMap.set(id, contextProps);
    return [context, contextProps];
};

const useModal = (id: string): IModalContext => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM(id, 'useModal'));
    if (!contextMap.has(id)) throw new Error(ERROR_MESSAGES.MODAL_ID_NOT_EXIST(id, 'useModal'));
    return useContext(contextMap.get(id));
};

const useModalProps = (id: string): IModalContextProps => {
    if (!id) throw new Error(ERROR_MESSAGES.MODAL_ID_INVALID_FROM(id, 'useModalProps'));
    if (!contextPropsMap.has(id)) throw new Error(ERROR_MESSAGES.MODAL_ID_NOT_EXIST(id, 'useModalProps'));
    return useContext(contextPropsMap.get(id));
};

const contextMap = new Map();
const contextPropsMap = new Map();

export { createModalContext, useModal, useModalProps };
