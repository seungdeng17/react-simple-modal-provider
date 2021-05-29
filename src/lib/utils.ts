const stateBundler = <T>(setFuncArr: Function[] = [], willState: T) => setFuncArr.forEach((set) => set(willState));

export { stateBundler };
