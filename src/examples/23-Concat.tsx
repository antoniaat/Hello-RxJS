import { useEffect } from "react";
import { concat, interval, take } from "rxjs";

export const Concat = () => {
    const interval$ = interval(1000);

    useEffect(() => {
        const timer$ = concat(
            interval$.pipe(take(3)),
            interval$.pipe(take(2)),
        ).subscribe(console.log);

        return () => timer$.unsubscribe();
    }, []);

    return (
        <section className='row'>
            <h1>Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next</h1>
            <p>
                Extremely useful for network request which we want to execute in a strict order.
            </p>
        </section>
    );
}