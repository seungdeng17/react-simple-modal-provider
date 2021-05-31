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
    id: string;
    modalSet: Set<string>;
    pending: boolean;
    state: boolean;
    close: Function;
    overlayClassName: IClassName;
    className: IClassName;
    duration: number;
    allowClickOutside: boolean;
    spinner: JSX.Element | boolean | undefined;
    spinnerColor: string;
}

export { IAnimation, IClassName, IPortalCommonProps };
