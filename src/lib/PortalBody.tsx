import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { IPortalCommonProps } from './type';
import { defer, dragHandler } from './utils';
import { OVERLAY_CLASS_NAME, CLASS_NAME } from './constants';

const PortalBody = ({ children, state, close, allowClickOutside, asyncOpen }: IPortalCommonProps) => {
    const [overlayClass, setOverlayClass] = useState(OVERLAY_CLASS_NAME.BASE);
    const [modalClass, setModalClass] = useState(CLASS_NAME.BASE);
    const modalRef = useRef<HTMLDivElement>(null);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    useEffect(() => {
        (async () => {
            if (state) {
                asyncOpen && (await defer(100));
                setOverlayClass((state) => `${state} ${OVERLAY_CLASS_NAME.AFTER_OPEN}`);
                setModalClass((state) => `${state} ${CLASS_NAME.AFTER_OPEN}`);
            } else {
                setOverlayClass((state) => `${state} ${OVERLAY_CLASS_NAME.BEFORE_CLOSE}`);
                setModalClass((state) => `${state} ${CLASS_NAME.BEFORE_CLOSE}`);
            }
        })();
    }, [state]);

    return (
        <div className={overlayClass} onClick={overlayClickHandler}>
            <div className={modalClass} onMouseDown={dragHandler} ref={modalRef}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default memo(PortalBody);
