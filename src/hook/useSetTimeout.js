import { useEffect, useRef } from 'react';

export function useSetTimeout(callback, seconds) {
    const timerId = useRef();

    useEffect(() => {
        timerId.current = setTimeout(callback, seconds);
        return () => clearTimeout(timerId.current);
    }, [])
}
