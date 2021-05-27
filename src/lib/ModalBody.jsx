import * as ReactModal from 'react-modal';
import { ClassNames } from '@emotion/react';

const ModalBody = ({
    children,
    isOpen,
    onRequestClose,
    allowOutsideClick = false,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    animation = { type: '', base: '', before: '', after: '' },
}) => {
    duration = animation.type && !duration ? 150 : duration;

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
                            z-index: 99999;
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
                        }

                        .overlay-before {
                            background-color: rgba(0, 0, 0, 0);
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
                    {children}
                </ReactModal>
            )}
        </ClassNames>
    );
};

export default ModalBody;
