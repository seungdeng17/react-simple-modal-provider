import { useState, useEffect, memo } from 'react';
import { useSetTimeout } from '../hook/useSetTimeout';

const Test = ({ subElement, duration, overlayClassName, className, close }) => {
    const [isAfter, setAfter] = useState(false);

    const overlayClickHandler = () => {
        setAfter(false);
        setTimeout(close, duration);
    };

    useSetTimeout(() => {
        setAfter(true);
    }, duration);

    return (
        <div
            className={`${overlayClassName.base} ${
                isAfter ? overlayClassName.afterOpen : overlayClassName.beforeClose
            }`}
            onClick={overlayClickHandler}
        >
            <div
                className={`${className.base} ${
                    isAfter ? className.afterOpen : className.beforeClose
                }`}
            >
                {subElement}
            </div>
        </div>
    );
};

export default memo(Test);
