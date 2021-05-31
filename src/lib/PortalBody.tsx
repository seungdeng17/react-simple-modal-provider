import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { stateBundler } from './utils';
import { IPortalCommonProps, IClassName } from './type';
import Spinner from './assets/Spinner';

interface IPortalBodyProps extends IPortalCommonProps {
    overlayClassName: IClassName;
    className: IClassName;
    duration?: number;
    allowClickOutside?: boolean;
}

const PortalBody = ({
    children,
    id,
    modalSet,
    pending,
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
        modalSet.delete(id);
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
        <>
            {pending ? (
                <div className={overlayClassName.base}>
                    <Spinner />
                </div>
            ) : (
                <div className={overlaylClass} onClick={overlayClickHandler}>
                    <div ref={modalRef} className={modalClass}>
                        <div>{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(PortalBody);
