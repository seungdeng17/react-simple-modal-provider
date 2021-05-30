import { ClassNames } from '@emotion/react';
import Portal from './Portal';
import { IOptionalProps } from './type';

interface IModalBodyProps extends IOptionalProps {
    children: React.ReactNode;
    initialization: boolean;
    state: boolean;
    close: Function;
}

const ModalBody = ({
    children,
    initialization,
    state,
    close,
    allowClickOutside = true,
    duration = 0,
    overlayColor = 'rgba(0, 0, 0, 0.6)',
    animation = { type: '', base: '', before: '', after: '' },
    vertical = 0,
    horizontal = 0,
    width = 0,
    height = 0,
    radius = 0,
    backgroundColor = 'transparent',
}: IModalBodyProps) => {
    return (
        <ClassNames>
            {({ css }) => (
                <Portal
                    initialization={initialization}
                    state={state}
                    close={close}
                    allowClickOutside={allowClickOutside}
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
                            bottom: ${vertical}px;
                            left: ${horizontal}px;
                            overflow: hidden;
                            outline: 0;
                            transition-timing-function: ease-in-out;
                            transition-property: ${animation.type};
                            ${animation.base};
                            transition-duration: ${duration}ms;

                            min-width: ${width}px;
                            min-height: ${height}px;
                            border-radius: ${radius}px;
                            background-color: ${backgroundColor};
                            display: flex;
                            justify-content: center;
                            align-items: center;
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
                </Portal>
            )}
        </ClassNames>
    );
};

export default ModalBody;
