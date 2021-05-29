const stateBundler = (setFuncArr: Function[] = [], willState: boolean): void =>
    setFuncArr.forEach((set) => set(willState));

export { stateBundler };
