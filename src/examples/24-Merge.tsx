import { useEffect } from "react";
import { interval, mapTo, merge, take } from "rxjs";

export const Merge = () => {
    const interval$ = interval(1000);

    useEffect(() => {
        const timer$ = merge(
            interval$.pipe(
                take(10),
                mapTo('a')),
            interval$.pipe(take(10)),
        ).subscribe(console.log);

        return () => timer$.unsubscribe();
    }, []);

    return (
        <section className='row'>
            <h1>Merge will concat the results of both observables</h1>
            <p>
                It's usefull to use it when we want to take at the same time results from more than one place
            </p>
        </section>
    );
}