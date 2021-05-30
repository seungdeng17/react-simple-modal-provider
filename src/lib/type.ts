interface IAnimation {
    type: string;
    base: string;
    before: string;
    after: string;
}

interface IClassName {
    base: string;
    afterOpen: string;
    beforeClose: string;
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
    asyncOpen?: Function;
}

interface IPortalCommonProps {
    children: React.ReactNode;
    id: string;
    modalSet: Set<string>;
    pending: boolean;
    state: boolean;
    close: Function;
    overlayClassName: IClassName;
    className: IClassName;
}

export { IOptionalProps, IClassName, IPortalCommonProps };
