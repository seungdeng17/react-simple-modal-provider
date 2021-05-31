import { IAnimation } from './type';

const stateBundler = <T>(setFuncArr: Function[] = [], willState: T) => setFuncArr.forEach((set) => set(willState));

const hash = (id: string) => {
    let hash = 0,
        i = 0,
        len = id.length;
    while (i < len) {
        hash = ((hash << 5) - hash + id.charCodeAt(i++)) << 0;
    }
    hash = hash + 2147483647 + 1;
    return `modal-${hash}`;
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
    if (typeof id !== 'string')
        throw new Error('react-simple-modal-provider: Modal Error! id props must be a string type.');
    if (!id || !consumer || !setState)
        throw new Error(
            'react-simple-modal-provider: Modal Error! Not enough essential props data. Check the Modal props. (id, consumer, state, setState)'
        );
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
        .css-${hashId} .overlay-base {
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

        .css-${hashId} .overlay-after {
            background-color: ${overlayColor};
        }

        .css-${hashId} .overlay-before {
            background-color: rgba(0, 0, 0, 0);
        }

        .css-${hashId} .content-base {
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

        .css-${hashId} .content-after {
            ${animation.after};
        }

        .css-${hashId} .content-before {
            ${animation.before};
        }
    `.replace(/\n|  /g, '');
};

export { stateBundler, hash, defer, checkModalEssentialProps, getModalStyle };
