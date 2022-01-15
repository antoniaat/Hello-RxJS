import { useEffect, useRef } from "react";
import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

export const DebounceTime = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            const type$ = fromEvent(inputRef.current, 'input').pipe(
                pluck('target', 'value'),
                debounceTime(1000),
                distinctUntilChanged(),
            ).subscribe(console.log);

            return () => type$.unsubscribe();
        }
    }, []);

    return (
        <section className="row">
            <h2>Takes each value emitted in the input after 1 second: </h2>
            <input ref={inputRef} type="text" placeholder="Type here.." />
        </section>
    );
}