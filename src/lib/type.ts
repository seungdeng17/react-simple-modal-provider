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

interface IPortalCommonProps {
    children: React.ReactNode;
    state: boolean;
    close: Function;
    allowClickOutside: boolean;
    overlayClassName: IClassName;
    className: IClassName;
    asyncOpen: Function | undefined;
}

export { IAnimation, IClassName, IPortalCommonProps };
