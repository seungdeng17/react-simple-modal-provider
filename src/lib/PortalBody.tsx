import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { stateBundler } from './utils';
import { IOptionalProps, IClassName } from './type';

interface IPortalBodyProps extends IOptionalProps {
    children: React.ReactNode;
    state: boolean;
    close: Function;
    overlayClassName: IClassName;
    className: IClassName;
}

const PortalBody = ({
    children,
    state,
    close,
    allowClickOutside,
    duration,
    overlayClassName,
    className,
}: IPortalBodyProps) => {
    const [isOpening, setOpening] = useState<boolean>(false);
    const [isClosing, setClosing] = useState<boolean>(false);
    const [isShow, setShow] = useState<boolean>(true);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        stateBundler([setShow, setOpening], true);
        if (state) return;
        setClosing(true);
        setTimeout(initializeState, duration);
    }, [state]);

    const initializeState = useCallback(() => stateBundler([setOpening, setClosing, setShow], false), []);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        setClosing(true);
        close();
    }, []);

    const overlaylClass = `${overlayClassName.base} ${isOpening ? overlayClassName.afterOpen : ''} ${
        isClosing ? overlayClassName.beforeClose : ''
    }`;

    const modalClass = `${className.base} ${isOpening ? className.afterOpen : ''} ${
        isClosing ? className.beforeClose : ''
    }`;

    if (!(state || isShow)) return null;

    return (
        <div className={overlaylClass} onClick={overlayClickHandler}>
            <div ref={modalRef} className={modalClass}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default memo(PortalBody);
