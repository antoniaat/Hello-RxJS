import { useEffect, useRef } from "react";
import { concatMap, fromEvent, interval, take } from "rxjs";

export const ConcatMap = () => {
    const buttonRef = useRef(null);
    const interval$ = interval(1000);

    useEffect(() => {
        if (buttonRef.current) {
            const clicks$ = fromEvent(buttonRef.current, 'click')
                .pipe(
                    concatMap(() => interval$.pipe(take(3)))
                ).subscribe(console.log);

            return () => clicks$.unsubscribe();
        }
    }, []);

    return (
        <section className='row'>
            <h1>First come, first served </h1>
            <button className="btn" ref={buttonRef}>
                Click me
            </button>
        </section>
    );
}