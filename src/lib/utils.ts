import { IAnimation } from './type';
import { CLASS_NAME, PREFIX, ERROR_MESSAGES } from './constants';

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

const checkModalEssentialProps = ({
    id,
    consumer,
    setState,
}: {
    id: string;
    consumer: React.ReactNode;
    setState: Function;
}) => {
    if (typeof id !== 'string') throw new Error(ERROR_MESSAGES.MODAL_ID_TYPE_ERROR);
    if (!id || !consumer || !setState) throw new Error(ERROR_MESSAGES.MODAL_PROPS_NOT_ENOUGH);
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
            z-index: 99999;
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

            min-width: ${width}px;
            min-height: ${height}px;
            border-radius: ${radius}px;
            background-color: ${backgroundColor};
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .${PREFIX.PORTAL}${hashId} .content-after {
            ${animation.after};
        }

        .${PREFIX.PORTAL}${hashId} .content-before {
            ${animation.before};
        }
    `.replace(/\n|  /g, '');
};

const throttle = function (callback: Function, waitTime: number) {
    let timerId: null | ReturnType<typeof setTimeout> = null;
    return (e: Event) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(null, e);
            timerId = null;
        }, waitTime);
    };
};

const modalDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
        currentTarget,
        clientX,
        clientY,
    }: {
        currentTarget: HTMLElement;
        clientX: number;
        clientY: number;
    } = e;

    if (!currentTarget.matches(`.${CLASS_NAME.BASE}`)) return;

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

export { stateBundler, hash, defer, checkModalEssentialProps, getModalStyle, throttle, modalDrag };
