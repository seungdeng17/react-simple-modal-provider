import { useState, useEffect, memo } from 'react';
import * as ReactDOM from 'react-dom';
import PortalBody from './PortalBody';

const body = document.body;

const Portal = ({ children, close, overlayClassName, className, isOpen, portalClassName }) => {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(portalClassName);
        body.appendChild(portal);
        setReady(true);
    }, []);

    if (!isReady || !isOpen) return null;

    return ReactDOM.createPortal(
        <PortalBody overlayClassName={overlayClassName} className={className} close={close}>
            {children}
        </PortalBody>,
        document.querySelector(`.${portalClassName}`)
    );
};

export default memo(Portal);
