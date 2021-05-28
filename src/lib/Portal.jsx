import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import PortalBody from './PortalBody';

const body = document.body;

const Portal = ({
    children,
    isOpen,
    close,
    duration,
    overlayClassName,
    className,
    portalClassName,
}) => {
    const [isCreatedPortal, setCreatedPortal] = useState(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(portalClassName);
        body.appendChild(portal);
        setCreatedPortal(true);
    }, []);

    if (!isCreatedPortal) return null;

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
