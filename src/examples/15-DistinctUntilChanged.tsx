import { useEffect } from "react";
import { distinctUntilChanged, from } from "rxjs";

export const DistinctUntilChanged = () => {
    const array = [1, 1, 1, 1, 2, 3, 2, 2, 4, 5, 3, 9, 5, 9];

    useEffect(() => {
        const numbers$ = from(array).pipe(
            distinctUntilChanged(),
        ).subscribe(console.log);

        numbers$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>
                Ignores non unique values - emits only when the current value is different than the last.
            </h2>
            <h2>
                Input Array: {array.join(', ')}
            </h2>
        </section>
    );
}