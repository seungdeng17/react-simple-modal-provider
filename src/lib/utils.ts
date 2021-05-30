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

export { stateBundler, hash };
