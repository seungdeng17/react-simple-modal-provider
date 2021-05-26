const scaleUp = {
    type: 'transform',
    base: 'transform: scale(0)',
    before: 'transform: scale(0)',
    after: 'transform: scale(1)',
};

const slideDown = {
    type: 'top',
    base: 'top: -40px',
    before: 'top: 40px',
    after: 'top: 0px',
};

const slideUp = {
    type: 'top',
    base: 'top: 40px',
    before: 'top: -40px',
    after: 'top: 0px',
};

export const modalAnimation = {
    scaleUp,
    slideDown,
    slideUp,
}
