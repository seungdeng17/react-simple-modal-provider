import { useState, useEffect, useRef, memo, useCallback } from 'react';

const PortalBody = ({ children, isOpen, close, duration, overlayClassName, className }) => {
    const [isOpening, setOpening] = useState(false);
    const [isClosing, setClosing] = useState(false);
    const [isShow, setShow] = useState(false);
    const modalRef = useRef();

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current.contains(target)) return;
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
        setClosing(true);
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
                    ref={modalRef}
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
