import * as ReactModal from 'react-modal';
import { ClassNames } from '@emotion/react';

const SimpleModalBody = ({
    isOpen,
    onRequestClose,
    body,
    allowOutsideClick = false,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    anim = '',
    customAnim = { type: '', before: '', after: '' },
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
                            overflow: hidden;
                            outline: 0;
                            transition-timing-function: ease-in-out;
                            transition-property: ${customAnim.type};
                            ${customAnim.before};
                            transition-duration: ${duration}ms;
                        }

                        .content-after {
                            ${customAnim.after};
                        }

                        .content-before {
                            ${customAnim.before};
                        }
                    `}
                >
                    {body}
                </ReactModal>
            )}
        </ClassNames>
    );
};

export default SimpleModalBody;
