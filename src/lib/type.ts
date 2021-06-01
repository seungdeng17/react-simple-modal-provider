interface IAnimation {
    type: string;
    base: string;
    before: string;
    after: string;
}

interface IPortalCommonProps {
    children: React.ReactNode;
    state: boolean;
    close: Function;
    allowClickOutside: boolean;
    asyncOpen?: Function;
    drag?: boolean;
}

export { IAnimation, IPortalCommonProps };
