import { useState, useEffect, memo } from 'react';
import * as ReactDOM from 'react-dom';
import Test from './Test';

const body = document.body;

const ReactModal = ({
    children,
    close,
    overlayClassName,
    className,
    isOpen,
    duration,
    portalClassName,
}) => {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(portalClassName);
        body.appendChild(portal);
        setReady(true);
    }, []);

    if (!isOpen || !isReady) return null;

    return ReactDOM.createPortal(
        <Test
            subElement={children}
            duration={duration}
            overlayClassName={overlayClassName}
            className={className}
            close={close}
        />,
        document.querySelector(`.${portalClassName}`)
    );
};

export default memo(ReactModal);
