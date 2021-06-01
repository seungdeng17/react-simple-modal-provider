const scaleUp = {
    type: 'transform, opacity',
    base: 'transform: scale(0.3); opacity: 0;',
    before: 'transform: scale(0.3); opacity: 0;',
    after: 'transform: scale(1); opacity: 1;',
};

const slideDown = {
    type: 'transform, opacity',
    base: 'transform: translateY(-50px); opacity: 0;',
    before: 'transform: translateY(50px); opacity: 0;',
    after: 'transform: translateY(0px); opacity: 1;',
};

const slideUp = {
    type: 'transform, opacity',
    base: 'transform: translateY(50px); opacity: 0;',
    before: 'transform: translateY(-50px); opacity: 0;',
    after: 'transform: translateY(0px); opacity: 1;',
};

export const modalAnimation = {
    scaleUp,
    slideDown,
    slideUp,
};
