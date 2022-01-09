import { useEffect, useRef, MutableRefObject } from "react";
import { fromEvent, map, mapTo } from "rxjs";

export const MapTo = () => {
    const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

    useEffect(() => {
        fromEvent(buttonRef.current, 'click').pipe(
            // map(e => 'Hi')
            mapTo('Hi'),
        ).subscribe(console.log);
    }, []);

    return (
        <article className="row">
            <h2>Subscribing to a button click event</h2>
            <button className="btn" ref={buttonRef}>
                Click me
            </button>
        </article>
    );
}