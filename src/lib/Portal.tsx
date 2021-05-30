import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import PortalBody from './PortalBody';
import { IOptionalProps, IClassName } from './type';

interface IPortalProps extends IOptionalProps {
    children: React.ReactNode;
    initialization: boolean;
    state: boolean;
    close: Function;
    overlayClassName: IClassName;
    className: IClassName;
    portalClassName: string;
}

const body = document.body;

const Portal = ({
    children,
    initialization,
    state,
    close,
    allowClickOutside,
    duration,
    overlayClassName,
    className,
    portalClassName,
}: IPortalProps) => {
    const [isCreatedPortal, setCreatedPortal] = useState<boolean>(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(portalClassName);
        body.appendChild(portal);
        setCreatedPortal(true);
    }, []);

    if (!isCreatedPortal || !initialization) return null;

    return ReactDOM.createPortal(
        <PortalBody
            state={state}
            close={close}
            allowClickOutside={allowClickOutside}
            duration={duration}
            overlayClassName={overlayClassName}
            className={className}
        >
            {children}
        </PortalBody>,
        document.querySelector(`.${portalClassName}`) as HTMLElement
    );
};

export default Portal;
