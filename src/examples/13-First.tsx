import { useEffect, useRef } from "react";
import { first, fromEvent, map, tap } from "rxjs";

interface ClickEvent extends Event {
    clientY: number;
}

export const First = () => {
    useEffect(() => {
        const click$ = fromEvent(document, 'click').pipe(
            map((event: Event) => ((event as ClickEvent).clientY)),
            tap(console.log),
            first((y) => y > 500)
        ).subscribe();

        return () => click$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>
                Calculates on which position the document is clicked and
                takes only the first position (by clientY) which is higher than 500
            </h2>
        </section>
    );
}