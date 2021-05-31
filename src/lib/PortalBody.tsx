import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { IPortalCommonProps, IClassName } from './type';
import { defer } from './utils';

interface IPortalBodyProps extends IPortalCommonProps {
    overlayClassName: IClassName;
    className: IClassName;
}

const PortalBody = ({
    children,
    state,
    close,
    allowClickOutside,
    overlayClassName,
    className,
    asyncOpen,
}: IPortalBodyProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    const [overlayClass, setOverlayClass] = useState(overlayClassName.base);
    const [modalClass, setModalClass] = useState(className.base);

    useEffect(async () => {
        if (state) {
            asyncOpen && (await defer(100));
            setOverlayClass((state) => `${state} ${overlayClassName.afterOpen}`);
            setModalClass((state) => `${state} ${className.afterOpen}`);
        } else {
            setOverlayClass((state) => `${state} ${overlayClassName.beforeClose}`);
            setModalClass((state) => `${state} ${className.beforeClose}`);
        }
    }, [state]);

    return (
        <div className={overlayClass} onClick={overlayClickHandler}>
            <div className={modalClass} ref={modalRef}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default memo(PortalBody);
