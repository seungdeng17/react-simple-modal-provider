import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { IPortalCommonProps } from './type';
import PortalBody from './PortalBody';

interface IPortalProps extends IPortalCommonProps {
    hashId: string;
    initialization: boolean;
    modalStyle: string;
}

const body = document.body;
const head = document.head;

const Portal = ({
    children,
    id,
    hashId,
    modalSet,
    initialization,
    pending,
    state,
    close,
    allowClickOutside,
    duration,
    overlayClassName,
    className,
    modalStyle,
    spinner,
    spinnerColor,
}: IPortalProps) => {
    const [isCreatedPortal, setCreatedPortal] = useState<boolean>(false);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(`css-${hashId}`);
        body.appendChild(portal);

        const style = document.createElement('style');
        style.textContent = modalStyle.replace(/\n|  /g, '');
        head.appendChild(style);

        setCreatedPortal(true);
    }, []);

    if (!isCreatedPortal || !initialization) return null;

    return ReactDOM.createPortal(
        <PortalBody
            id={id}
            modalSet={modalSet}
            pending={pending}
            state={state}
            close={close}
            allowClickOutside={allowClickOutside}
            spinner={spinner}
            spinnerColor={spinnerColor}
            duration={duration}
            overlayClassName={overlayClassName}
            className={className}
        >
            {children}
        </PortalBody>,
        document.querySelector(`.css-${hashId}`) as HTMLElement
    );
};

export default Portal;
