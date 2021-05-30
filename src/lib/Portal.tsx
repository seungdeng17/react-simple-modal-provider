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
const head = document.head;

const Portal = ({
    children,
    id,
    initialization,
    state,
    close,
    allowClickOutside,
    duration,
    overlayClassName,
    className,
    modalStyle,
}: IPortalProps) => {
    const [isCreatedPortal, setCreatedPortal] = useState<boolean>(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(`css-${id}`);
        body.appendChild(portal);

        const style = document.createElement('style');
        style.textContent = modalStyle;
        head.appendChild(style);

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
        document.querySelector(`.css-${id}`) as HTMLElement
    );
};

export default Portal;
