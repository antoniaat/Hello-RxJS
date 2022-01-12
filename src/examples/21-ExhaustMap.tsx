import { useEffect, useRef } from "react";
import { exhaustMap, fromEvent, interval, take } from "rxjs";

export const ExhaustMap = () => {
    const buttonRef = useRef(null);
    const interval$ = interval(1000);

    useEffect(() => {
        if (buttonRef.current) {
            const clicks$ = fromEvent(buttonRef.current, 'click')
                .pipe(
                    exhaustMap(() => interval$.pipe(take(3)))
                ).subscribe(console.log);

            return () => clicks$.unsubscribe();
        }
    }, []);

    return (
        <section className='row'>
            <h1>Ignores other values until the first inner observable completes</h1>
            <button className="btn" ref={buttonRef}>
                Click me
            </button>
        </section>
    );
}