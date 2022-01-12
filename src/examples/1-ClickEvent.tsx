import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

export const ClickEvent = () => {
    const buttonRef = useRef(null);

    const observer = {
        next: (value: unknown) => console.log("next", value),
    };

    useEffect(() => {
        if (buttonRef.current) {
            const click$ = fromEvent(buttonRef.current, 'click');
            const clickSubscription = click$.subscribe(observer);

            return () => { clickSubscription.unsubscribe() }
        }
    }, []);

    return (
        <section>
            <article className="row">
                <h2>Subscribing to a button click event</h2>
                <p> <strong>fromEvent</strong> -
                    Creates an Observable that emits events of a specific type coming from the given event target
                </p>
                <button className="btn" ref={buttonRef}>
                    Click me
                </button>
            </article>
        </section>
    );
}