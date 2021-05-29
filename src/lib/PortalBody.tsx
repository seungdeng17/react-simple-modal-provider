import { useState, useEffect, useRef, memo, useCallback } from 'react';
import cx from 'classnames';
import { stateBundler } from './utils';
import { IOptionalProps, IClassName } from './type';

interface IPortalProps extends IOptionalProps {
    children: React.ReactNode;
    state: boolean;
    close: Function;
    overlayClassName: IClassName;
    className: IClassName;
}

const PortalBody = ({
    children,
    state,
    close,
    allowClickOutside,
    duration,
    overlayClassName,
    className,
}: IPortalProps) => {
    const [isOpening, setOpening] = useState<boolean>(false);
    const [isClosing, setClosing] = useState<boolean>(false);
    const [isShow, setShow] = useState<boolean>(true);
    const modalRef = useRef();

    useEffect(() => {
        stateBundler([setShow, setOpening], true);
        if (state) return;
        setClosing(true);
        setTimeout(initializeState, duration);
    }, [state]);

    const initializeState = useCallback(
        () => stateBundler([setOpening, setClosing, setShow], false),
        []
    );

    const overlayClickHandler = useCallback(({ target }) => {
        if (modalRef.current.contains(target) || !allowClickOutside) return;
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
        (state || isShow) && (
            <div className={overlaylClass} onClick={overlayClickHandler}>
                <div ref={modalRef} className={modalClass}>
                    {children}
                </div>
            </div>
        )
    );
};

export default memo(PortalBody);
