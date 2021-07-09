const OVERLAY_CLASS_NAME = {
    BASE: 'overlay-base',
    AFTER_OPEN: 'overlay-after',
    BEFORE_CLOSE: 'overlay-before',
};

const CLASS_NAME = {
    BASE: 'content-base',
    AFTER_OPEN: 'content-after',
    BEFORE_CLOSE: 'content-before',
};

const PREFIX = {
    HASH: 'modal-',
    PORTAL: 'portal-',
};

const ERROR_MESSAGES = {
    MODAL_PROVIDER_EMPTY_VALUE: 'react-simple-modal-provider: ModalProvider Warning! Value props is empty.',
    MODAL_ID_TYPE_ERROR: (id: string) =>
        `react-simple-modal-provider: Modal ID(${id}): Modal Error! id props must be a string type.`,
    MODAL_NOT_ENOUGH_PROPS: (id: string) =>
        `react-simple-modal-provider: Modal ID(${id}): Modal Error! Not enough required props data. Check the Modal props. (id, consumer, isOpen, setOpen)`,
    MODAL_ID_INVALID_FROM_CONTEXT: (id: string) =>
        `react-simple-modal-provider: context Error! ID "${id}" is not valid`,
    MODAL_ID_INVALID_FROM: (id: string, name: string) =>
        `react-simple-modal-provider: ${name} Error! ID "${id}" is not valid`,
    MODAL_ID_NOT_EXIST: (id: string, name: string) =>
        `react-simple-modal-provider: ${name} Error! ID "${id}" not exist. Check the order of value props passed to "ModalProvider".`,
    MODAL_CUSTOM_STYLE_WARN: (id: string) =>
        `react-simple-modal-provider: Modal ID(${id}): The backgroundColor is transparent. Please specify the backgroundColor.`,
};

export { OVERLAY_CLASS_NAME, CLASS_NAME, PREFIX, ERROR_MESSAGES };
