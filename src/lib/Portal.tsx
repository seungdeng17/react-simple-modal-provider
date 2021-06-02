import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { IPortalCommonProps } from './type';
import PortalBody from './PortalBody';
import Spinner from './Spinner';
import { PREFIX } from './constants';
import { $, defer } from './utils';

interface IPortalProps extends IPortalCommonProps {
    id: string;
    modalSet: Set<string>;
    pending: boolean;
    hashId: string;
    initialization: boolean;
    duration: number;
    modalStyle: string;
    spinner?: JSX.Element | boolean;
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
    modalStyle,
    spinner,
    spinnerColor,
    draggable,
}: IPortalProps) => {
    const [isCreatedPortal, setCreatedPortal] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if (!state) {
                await defer(duration);

                const portal = $(`.${PREFIX.PORTAL}${hashId}`);
                const style = $(`[data-modal-style="${PREFIX.PORTAL}${hashId}`);
                portal?.remove();
                style?.remove();

                return setCreatedPortal(false);
            }

            const portal = document.createElement('div');
            portal.classList.add(`${PREFIX.PORTAL}${hashId}`);
            body.appendChild(portal);

            const style = document.createElement('style');
            style.setAttribute('data-modal-style', `${PREFIX.PORTAL}${hashId}`);
            style.textContent = modalStyle;
            head.appendChild(style);

            setCreatedPortal(true);
        })();
    }, [state]);

    useEffect(() => {
        if (!initialization || state) return;
        modalSet.delete(id);
    }, [state]);

    if (!isCreatedPortal || !initialization) return null;
    if (pending) return <Spinner spinner={spinner} spinnerColor={spinnerColor} />;

    return ReactDOM.createPortal(
        <PortalBody state={state} close={close} allowClickOutside={allowClickOutside} draggable={draggable}>
            {children}
        </PortalBody>,
        $(`.${PREFIX.PORTAL}${hashId}`) as HTMLElement
    );
};

export default Portal;
