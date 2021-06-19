import { useState, useEffect, useRef, useCallback } from 'react';
import { IPortalCommonProps } from './type';
import { defer, startDragHandler } from './utils';
import { OVERLAY_CLASS_NAME, CLASS_NAME } from './constants';

const PortalBody = ({ children, isOpen, close, allowClickOutside, draggable }: IPortalCommonProps) => {
    const [overlayClass, setOverlayClass] = useState(OVERLAY_CLASS_NAME.BASE);
    const [modalClass, setModalClass] = useState(CLASS_NAME.BASE);
    const modalRef = useRef<HTMLDivElement>(null);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    const modalDragHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!draggable) return;
        startDragHandler(e);
    }, []);

    useEffect(() => {
        (async () => {
            if (isOpen) {
                await defer(30);

                setOverlayClass((overlayClass) => `${overlayClass} ${OVERLAY_CLASS_NAME.AFTER_OPEN}`);
                setModalClass((modalClass) => `${modalClass} ${CLASS_NAME.AFTER_OPEN}`);
            } else {
                setOverlayClass((overlayClass) => `${overlayClass} ${OVERLAY_CLASS_NAME.BEFORE_CLOSE}`);
                setModalClass((modalClass) => `${modalClass} ${CLASS_NAME.BEFORE_CLOSE}`);
            }
        })();
    }, [isOpen]);

    return (
        <div className={overlayClass} onClick={overlayClickHandler}>
            <div className={modalClass} onMouseDown={modalDragHandler} ref={modalRef}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default PortalBody;
