import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { IPortalCommonProps } from './type';
import PortalBody from './PortalBody';
import DefaultSpinner from './assets/Spinner';

interface IPortalProps extends IPortalCommonProps {
    id: string;
    modalSet: Set<string>;
    pending: boolean;
    hashId: string;
    initialization: boolean;
    duration: number;
    modalStyle: string;
    spinner: JSX.Element | boolean | undefined;
    spinnerColor: string;
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
    asyncOpen,
    spinner,
    spinnerColor,
}: IPortalProps) => {
    const [isCreatedPortal, setCreatedPortal] = useState<boolean>(false);
    const [isShow, setShow] = useState<boolean>(true);

    useEffect(() => {
        const portal = document.createElement('div');
        portal.classList.add(`css-${hashId}`);
        body.appendChild(portal);

        const style = document.createElement('style');
        style.textContent = modalStyle.replace(/\n|  /g, '');
        head.appendChild(style);

        setCreatedPortal(true);
    }, []);

    useEffect(() => {
        if (!initialization) return;
        setShow(true);
        if (state) return;
        modalSet.delete(id);
        setTimeout(() => setShow(false), duration);
    }, [state]);

    if (!isCreatedPortal || !initialization) return null;
    if (!(state || isShow)) return null;
    if (pending) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    outline: '0',
                    zIndex: 99999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointerEvents: 'none',
                }}
            >
                {spinner ? spinner : spinner !== false && <DefaultSpinner spinnerColor={spinnerColor} />}
            </div>
        );
    }

    return ReactDOM.createPortal(
        <PortalBody
            state={state}
            close={close}
            allowClickOutside={allowClickOutside}
            asyncOpen={asyncOpen}
            overlayClassName={overlayClassName}
            className={className}
        >
            {children}
        </PortalBody>,
        document.querySelector(`.css-${hashId}`) as HTMLElement
    );
};

export default Portal;
