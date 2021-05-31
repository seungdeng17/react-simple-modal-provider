import { useState, useEffect } from 'react';
import { defer } from './utils';

const Test = ({ state, children, overlayClickHandler, overlayClassName, className, modalRef }) => {
    const [overlayClass, setOverlayClass] = useState(overlayClassName.base);
    const [modalClass, setModalClass] = useState(className.base);

    useEffect(async () => {
        if (state) {
            await defer(0);
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

export default Test;
