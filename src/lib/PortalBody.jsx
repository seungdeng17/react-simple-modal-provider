import { useState, useEffect, memo } from 'react';

const PortalBody = ({ children, overlayClassName, className, close }) => {
    const [onOpenEvent, setOpenEvent] = useState(false);
    const [onCloseEvent, setCloseEvent] = useState(false);

    const overlayClickHandler = () => {
        setCloseEvent(true);
        close();
    };

    useEffect(() => {
        setOpenEvent(true);
    }, []);

    return (
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
    );
};

export default memo(PortalBody);
