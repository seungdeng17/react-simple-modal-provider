import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import PortalBody from './PortalBody';

const body = document.body;

const Portal = ({
    children,
    trigger,
    isOpen,
    close,
    duration,
    overlayClassName,
    className,
    portalClassName,
}) => {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(portalClassName);
        body.appendChild(portal);
        setReady(true);
    }, []);

    if (!isReady || !trigger) return null;

    return ReactDOM.createPortal(
        <PortalBody
            isOpen={isOpen}
            close={close}
            duration={duration}
            overlayClassName={overlayClassName}
            className={className}
            portalClassName={portalClassName}
        >
            {children}
        </PortalBody>,
        document.querySelector(`.${portalClassName}`)
    );
};

export default Portal;
