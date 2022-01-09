import { useEffect, useRef } from "react";
import { debounceTime, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

export const ThrottleTime = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            const clicks$ = fromEvent(buttonRef.current, 'click')
                .pipe(
                    throttleTime(3000)
                )
                .subscribe(console.log);

            return () => clicks$.unsubscribe();
        }

    }, []);

    return (
        <article className="row">
            <h2>Lets a value pass, then ignores source values for the next duration milliseconds.</h2>
            <button className="btn" ref={buttonRef}>
                Click me
            </button>
        </article>
    );
}