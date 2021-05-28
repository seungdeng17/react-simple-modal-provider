import { useState, useEffect, useRef, memo, useCallback } from 'react';
import cx from 'classnames';
import { stateBundler } from './utils';

const PortalBody = ({
    children,
    isOpen,
    close,
    allowOutsideClick,
    duration,
    overlayClassName,
    className,
}) => {
    const [isOpening, setOpening] = useState(false);
    const [isClosing, setClosing] = useState(false);
    const [isShow, setShow] = useState(true);
    const modalRef = useRef();

    useEffect(() => {
        stateBundler([setShow, setOpening], true);
        if (isOpen) return;
        setClosing(true);
        setTimeout(initializeState, duration);
    }, [isOpen]);

    const initializeState = useCallback(() => stateBundler([setOpening, setClosing, setShow], false), []);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current.contains(target) || allowOutsideClick) return;
        setClosing(true);
        close();
    }, []);

    const overlaylClass = cx(overlayClassName.base, {
        [overlayClassName.afterOpen]: isOpening,
        [overlayClassName.beforeClose]: isClosing,
    });

    const modalClass = cx(className.base, {
        [className.afterOpen]: isOpening,
        [className.beforeClose]: isClosing,
    });

    return (
        (isOpen || isShow) && (
            <div className={overlaylClass} onClick={overlayClickHandler}>
                <div ref={modalRef} className={modalClass}>
                    {children}
                </div>
            </div>
        )
    );
};

export default memo(PortalBody);
