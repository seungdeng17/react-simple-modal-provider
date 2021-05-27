import { createContext, useContext } from 'react';

const contextMap = new Map();

const createModalContext = (key) => {
    if (!key) return console.error('Error! 유효하지 않은 key');
    if (contextMap.has(key)) return console.error('Error! 중복된 key');
    const context = createContext();
    contextMap.set(key, context);
    return context;
};

const useModal = (key) => {
    if (!key) return console.error('Error! 유효하지 않은 key');
    if (!contextMap.has(key)) return console.error('Error! 존재하지 않는 key');
    return useContext(contextMap.get(key));
};

export { createModalContext, useModal };
