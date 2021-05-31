import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { IPortalCommonProps } from './type';
import { defer } from './utils';

const overlayClassName = {
    base: 'overlay-base',
    afterOpen: 'overlay-after',
    beforeClose: 'overlay-before',
};

const className = {
    base: 'content-base',
    afterOpen: 'content-after',
    beforeClose: 'content-before',
};

const PortalBody = ({ children, state, close, allowClickOutside, asyncOpen }: IPortalCommonProps) => {
    const [overlayClass, setOverlayClass] = useState(overlayClassName.base);
    const [modalClass, setModalClass] = useState(className.base);
    const modalRef = useRef<HTMLDivElement>(null);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    useEffect(() => {
        (async () => {
            if (state) {
                asyncOpen && (await defer(100));
                setOverlayClass((state) => `${state} ${overlayClassName.afterOpen}`);
                setModalClass((state) => `${state} ${className.afterOpen}`);
            } else {
                setOverlayClass((state) => `${state} ${overlayClassName.beforeClose}`);
                setModalClass((state) => `${state} ${className.beforeClose}`);
            }
        })();
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
