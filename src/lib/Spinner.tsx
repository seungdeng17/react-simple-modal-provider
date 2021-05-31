import DefaultSpinner from './assets/SpinnerSVG';

const Spinner = ({ spinner, spinnerColor }: { spinner: JSX.Element | boolean | undefined; spinnerColor: string }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                height: '100%',
                outline: '0',
                zIndex: 99999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointerEvents: 'none',
            }}
        >
            {spinner ? spinner : spinner !== false && <DefaultSpinner spinnerColor={spinnerColor} />}
        </div>
    );
};

export default Spinner;
