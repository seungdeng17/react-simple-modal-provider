const stateBundler = (setFuncArr = [], willState) => setFuncArr.forEach((set) => set(willState));

export { 
    stateBundler,
};
