import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { IPortalCommonProps, ModalDragEventPropertyType } from './type';
import { defer, modalDrag } from './utils';
import { OVERLAY_CLASS_NAME, CLASS_NAME } from './constants';

const PortalBody = ({ children, state, close, allowClickOutside, asyncOpen, drag }: IPortalCommonProps) => {
    const [overlayClass, setOverlayClass] = useState(OVERLAY_CLASS_NAME.BASE);
    const [modalClass, setModalClass] = useState(CLASS_NAME.BASE);
    const modalRef = useRef<HTMLDivElement>(null);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    const modalDragHandler = ({ target, clientX, clientY, pageX, pageY }: ModalDragEventPropertyType) => {
        if (!drag) return;
        modalDrag({ target, clientX, clientY, pageX, pageY });
    };

    useEffect(() => {
        (async () => {
            if (state) {
                asyncOpen && (await defer(100));
                setOverlayClass((overlayClass) => `${overlayClass} ${OVERLAY_CLASS_NAME.AFTER_OPEN}`);
                setModalClass((modalClass) => `${modalClass} ${CLASS_NAME.AFTER_OPEN}`);
            } else {
                setOverlayClass((overlayClass) => `${overlayClass} ${OVERLAY_CLASS_NAME.BEFORE_CLOSE}`);
                setModalClass((modalClass) => `${modalClass} ${CLASS_NAME.BEFORE_CLOSE}`);
            }
        })();
    }, [state]);

    return (
        <div className={overlayClass} onClick={overlayClickHandler}>
            <div className={modalClass} onMouseDown={modalDragHandler} ref={modalRef}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default memo(PortalBody);
