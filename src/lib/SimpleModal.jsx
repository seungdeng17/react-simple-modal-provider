import * as ReactModal from 'react-modal';
import { ClassNames } from '@emotion/react';

const SimpleModalBody = ({
    isOpen,
    onRequestClose,
    body,
    allowOutsideClick = false,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    animation = { type: '', base: '', before: '', after: '' },
}) => {
    return (
        <ClassNames>
            {({ css }) => (
                <ReactModal
                    isOpen={isOpen}
                    onRequestClose={onRequestClose}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={!allowOutsideClick}
                    overlayClassName={{
                        base: 'overlay-base',
                        afterOpen: 'overlay-after',
                        beforeClose: 'overlay-before',
                    }}
                    className={{
                        base: 'content-base',
                        afterOpen: 'content-after',
                        beforeClose: 'content-before',
                    }}
                    closeTimeoutMS={duration}
                    portalClassName={css`
                        .overlay-base {
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            outline: 0;
                            opacity: 0;
                            z-index: 9999;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: rgba(0, 0, 0, 0);
                            transition-property: background-color, opacity;
                            transition-timing-function: ease-in-out;
                            transition-duration: ${duration}ms;
                        }

                        .overlay-after {
                            background-color: ${overlayColor};
                            opacity: 1;
                        }

                        .overlay-before {
                            background-color: rgba(0, 0, 0, 0);
                            opacity: 0;
                        }

                        .content-base {
                            position: relative;
                            overflow: hidden;
                            outline: 0;
                            transition-timing-function: ease-in-out;
                            transition-property: ${animation.type};
                            ${animation.base};
                            transition-duration: ${duration}ms;
                        }

                        .content-after {
                            ${animation.after};
                        }

                        .content-before {
                            ${animation.before};
                        }
                    `}
                >
                    {body}
                </ReactModal>
            )}
        </ClassNames>
    );
};

const SimpleModal = ({
    children,
    context,
    isOpen,
    setOpen,
    body,
    allowOutsideClick,
    duration,
    overlayColor,
    animation,
}) => {
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <context.Provider value={{ open, close }}>
            {children}
            <SimpleModalBody
                isOpen={isOpen}
                onRequestClose={close}
                body={body}
                allowOutsideClick={allowOutsideClick}
                duration={duration}
                overlayColor={overlayColor}
                animation={animation}
            />
        </context.Provider>
    );
};

export default SimpleModal;
