import { ClassNames } from '@emotion/react';
import Portal from './Portal';

const ModalBody = ({
    children,
    trigger,
    isOpen,
    close,
    allowOutsideClick = false,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    animation = { type: '', base: '', before: '', after: '' },
    vertical = 0,
    horizontal = 0,
}) => {
    return (
        <ClassNames>
            {({ css }) => (
                <Portal
                    trigger={trigger}
                    isOpen={isOpen}
                    close={close}
                    allowOutsideClick={allowOutsideClick}
                    duration={duration}
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
                    portalClassName={css`
                        .overlay-base {
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            outline: 0;
                            z-index: 99999;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: rgba(0, 0, 0, 0);
                            animation-duration: ${duration}ms;
                            animation-timing-function: ease-in-out;
                            animation-fill-mode: both;
                        }

                        .overlay-after {
                            animation-name: overlayAfter;
                            @keyframes overlayAfter {
                                0% {
                                    background-color: rgba(0, 0, 0, 0);
                                }
                                100% {
                                    background-color: ${overlayColor};
                                }
                            }
                        }

                        .overlay-before {
                            animation-name: overlayBefore;
                            @keyframes overlayBefore {
                                0% {
                                    background-color: ${overlayColor};
                                }
                                100% {
                                    background-color: rgba(0, 0, 0, 0);
                                }
                            }
                        }

                        .content-base {
                            position: relative;
                            bottom: ${vertical}px;
                            left: ${horizontal}px;
                            overflow: hidden;
                            outline: 0;
                            animation-duration: ${duration}ms;
                            animation-timing-function: ease-in-out;
                            animation-fill-mode: both;
                        }

                        .content-after {
                            animation-name: contentAfter;
                            @keyframes contentAfter {
                                0% {
                                    ${animation.before};
                                }
                                100% {
                                    ${animation.after};
                                }
                            }
                        }

                        .content-before {
                            animation-name: contentBefore;
                            @keyframes contentBefore {
                                0% {
                                    ${animation.after};
                                }
                                100% {
                                    ${animation.base};
                                }
                            }
                        }
                    `}
                >
                    {children}
                </Portal>
            )}
        </ClassNames>
    );
};

export default ModalBody;
