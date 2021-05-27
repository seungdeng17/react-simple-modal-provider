
import { createContext, useContext } from 'react';

const contextMap = new Map();

const modalContext = key => {
    if (contextMap.has(key)) return console.error('Error! 중복된 key');
    const context = createContext();
    contextMap.set(key, context);
    return context;
};

const useModal = key => {
    if (!contextMap.has(key)) return console.error('Error! 존재하지 않는 key');
    return useContext(contextMap(key));
};

export {
    modalContext,
    useModal,
}
