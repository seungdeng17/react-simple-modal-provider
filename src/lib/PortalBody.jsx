import { useState, useEffect, memo, useCallback } from 'react';

const PortalBody = ({
    children,
    trigger,
    isOpen,
    close,
    duration,
    overlayClassName,
    className,
}) => {
    const [onOpenEvent, setOpenEvent] = useState(false);
    const [onCloseEvent, setCloseEvent] = useState(false);
    const [isShow, setShow] = useState(false);

    const overlayClickHandler = useCallback(() => {
        setCloseEvent(true);
        close();
    }, []);

    useEffect(() => {
        setShow(true);
        setOpenEvent(true);
        if (trigger && !isOpen) {
            setTimeout(() => {
                setOpenEvent(false);
                setCloseEvent(false);
                setShow(false);
            }, duration);
        }
    }, [isOpen]);

    return (
        isShow && (
            <div
                className={`
                ${overlayClassName.base} 
                ${onOpenEvent ? overlayClassName.afterOpen : ''} 
                ${onCloseEvent ? overlayClassName.beforeClose : ''}
            `}
                onClick={overlayClickHandler}
            >
                <div
                    className={`
                    ${className.base} 
                    ${onOpenEvent ? className.afterOpen : ''} 
                    ${onCloseEvent ? className.beforeClose : ''}
                `}
                >
                    {children}
                </div>
            </div>
        )
    );
};

export default memo(PortalBody);
