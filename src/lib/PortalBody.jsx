import { useState, useEffect, memo, useCallback } from 'react';

const PortalBody = ({ children, isOpen, close, duration, overlayClassName, className }) => {
    const [isOpening, setOpening] = useState(false);
    const [isClosing, setClosing] = useState(false);
    const [isShow, setShow] = useState(false);

    const overlayClickHandler = useCallback(() => {
        setClosing(true);
        close();
    }, []);

    const initializeState = useCallback(() => {
        setOpening(false);
        setClosing(false);
        setShow(false);
    }, []);

    useEffect(() => {
        setShow(true);
        setOpening(true);
        if (isOpen) return;

        setTimeout(initializeState, duration);
    }, [isOpen]);

    return (
        isShow && (
            <div
                className={`
                ${overlayClassName.base} 
                ${isOpening ? overlayClassName.afterOpen : ''} 
                ${isClosing ? overlayClassName.beforeClose : ''}
            `}
                onClick={overlayClickHandler}
            >
                <div
                    className={`
                    ${className.base} 
                    ${isOpening ? className.afterOpen : ''} 
                    ${isClosing ? className.beforeClose : ''}
                `}
                >
                    {children}
                </div>
            </div>
        )
    );
};

export default memo(PortalBody);
