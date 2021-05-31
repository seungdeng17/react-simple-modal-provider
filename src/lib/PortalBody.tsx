import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { IPortalCommonProps, IClassName } from './type';
import DefaultSpinner from './assets/Spinner';
import Temp from './Temp';

interface IPortalBodyProps extends IPortalCommonProps {
    overlayClassName: IClassName;
    className: IClassName;
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
    spinner,
    spinnerColor,
}: IPortalBodyProps) => {
    const [isShow, setShow] = useState<boolean>(true);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setShow(true);
        if (state) return;
        modalSet.delete(id);
        setTimeout(() => setShow(false), duration);
    }, [state]);

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current?.contains(target) || !allowClickOutside) return;
        close();
    }, []);

    if (!(state || isShow)) return null;

    return (
        <>
            {pending ? (
                <div className={overlayClassName.base}>
                    {spinner ? spinner : spinner !== false && <DefaultSpinner spinnerColor={spinnerColor} />}
                </div>
            ) : (
                <Temp {...{ state, overlayClickHandler, overlayClassName, className, modalRef }}>{children}</Temp>
            )}
        </>
    );
};

export default memo(PortalBody);
