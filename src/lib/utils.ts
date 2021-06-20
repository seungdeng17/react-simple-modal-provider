import { IAnimation } from './type';
import { PREFIX, ERROR_MESSAGES } from './constants';

const $ = (selector: string, parent: HTMLElement | Document = document) => parent.querySelector(selector);

const stateBundler = <T>(setFuncArr: Function[] = [], willState: T) => setFuncArr.forEach((set) => set(willState));

const hash = (id: string) => {
    let hash = 0,
        i = 0,
        len = id.length;
    while (i < len) {
        hash = ((hash << 5) - hash + id.charCodeAt(i++)) << 0;
    }
    hash = hash + 2147483647 + 1;
    return `${PREFIX.HASH}${hash}`;
};

const defer = async (ms: number) => await new Promise((r) => setTimeout(r, ms));

const checkRequiredProps = ({
    id,
    consumer,
    isOpen,
    setOpen,
}: {
    id: string;
    consumer: React.ReactNode;
    isOpen: boolean;
    setOpen: Function;
}) => {
    if (typeof id !== 'string') throw new Error(ERROR_MESSAGES.MODAL_ID_TYPE_ERROR(id));
    if (!id || !consumer || isOpen === undefined || !setOpen)
        throw new Error(ERROR_MESSAGES.MODAL_NOT_ENOUGH_PROPS(id));
};

const getModalStyle = ({
    hashId,
    duration,
    vertical,
    horizontal,
    width,
    height,
    radius,
    overlayColor,
    backgroundColor,
    animation,
}: {
    hashId: string;
    duration: number;
    vertical: number;
    horizontal: number;
    width: number;
    height: number;
    radius: number;
    overlayColor: string;
    backgroundColor: string;
    animation: IAnimation;
}) => {
    return `
        .${PREFIX.PORTAL}${hashId} .overlay-base {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100%;
            outline: 0;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0);
            transition-property: background-color, opacity;
            transition-timing-function: ease-in-out;
            transition-duration: ${duration}ms;
        }

        .${PREFIX.PORTAL}${hashId} .overlay-after {
            background-color: ${overlayColor};
        }

        .${PREFIX.PORTAL}${hashId} .overlay-before {
            background-color: rgba(0, 0, 0, 0);
        }

        .${PREFIX.PORTAL}${hashId} .content-base {
            position: relative;
            bottom: ${vertical}px;
            left: ${horizontal}px;
            overflow: hidden;
            outline: 0;
            transition-timing-function: ease-in-out;
            transition-property: ${animation.type};
            ${animation.base};
            transition-duration: ${duration}ms;
            visibility: hidden;
            pointer-events: none;

            min-width: ${width}px;
            min-height: ${height}px;
            border-radius: ${radius}px;
            background-color: ${backgroundColor};
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .${PREFIX.PORTAL}${hashId} .content-after {
            visibility: visible;
            pointer-events: auto;
            ${animation.after};
        }

        .${PREFIX.PORTAL}${hashId} .content-before {
            ${animation.before};
        }
    `.replace(/\n|  /g, '');
};

const throttle = (callback: Function, waitTime: number) => {
    let timerId: null | ReturnType<typeof setTimeout> = null;
    return (e: Event) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(null, e);
            timerId = null;
        }, waitTime);
    };
};

const startDragHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
        currentTarget,
        clientX,
        clientY,
    }: {
        currentTarget: HTMLElement;
        clientX: number;
        clientY: number;
    } = e;

    const move = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        currentTarget.style.top = clientY - offsetY + 'px';
        currentTarget.style.left = clientX - offsetX + 'px';
    };

    const onMouseMoveThrottle = throttle(({ clientX, clientY }: { clientX: number; clientY: number }) => {
        if (clientX <= 0 || clientY <= 0 || clientX >= innerWidth || clientY >= innerHeight)
            return removeMousemoveEvent();
        move({ clientX, clientY });
    }, 10);

    const removeMousemoveEvent = () => {
        document.removeEventListener('mousemove', onMouseMoveThrottle);
        currentTarget.onmouseup = null;
    };

    document.addEventListener('mousemove', onMouseMoveThrottle);
    currentTarget.onmouseup = removeMousemoveEvent;

    const offsetX = clientX - currentTarget.getBoundingClientRect().left;
    const offsetY = clientY - currentTarget.getBoundingClientRect().top;
    move({ clientX, clientY });

    currentTarget.style.width = currentTarget.offsetWidth + 'px';
    currentTarget.style.height = currentTarget.offsetHeight + 'px';
    currentTarget.style.position = 'fixed';
    currentTarget.style.zIndex = '10000';
};

const checkPropsCondition = (props: {}) => {
    return (
        props !== null &&
        typeof props === 'object' &&
        props.constructor &&
        props.constructor.name !== 'SyntheticBaseEvent'
    );
};

const checkCustomStyle = ({
    id,
    width,
    height,
    backgroundColor,
}: {
    id: string;
    width: number;
    height: number;
    backgroundColor: string;
}) => {
    if ((!!width || !!height) && backgroundColor === 'transparent')
        console.warn(ERROR_MESSAGES.MODAL_CUSTOM_STYLE_WARN(id));
};

export {
    $,
    stateBundler,
    hash,
    defer,
    checkRequiredProps,
    getModalStyle,
    throttle,
    startDragHandler,
    checkPropsCondition,
    checkCustomStyle,
};
