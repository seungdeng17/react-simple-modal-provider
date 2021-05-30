interface IAnimation {
    type: string;
    base: string;
    before: string;
    after: string;
}

interface IOptionalProps {
    allowClickOutside?: boolean;
    duration?: number;
    overlayColor?: string;
    animation?: IAnimation;
    vertical?: number;
    horizontal?: number;
    width?: number;
    height?: number;
    radius?: number;
    backgroundColor?: string;
}

interface IClassName {
    base: string;
    afterOpen: string;
    beforeClose: string;
}

export { IOptionalProps, IClassName };
