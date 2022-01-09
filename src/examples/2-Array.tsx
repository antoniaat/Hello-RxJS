import { useEffect } from "react";
import { delay, from } from "rxjs";

export const Array = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        const arraySource$ = from(array).pipe(delay(1200))
            .subscribe(val => console.log(val));

        return () => arraySource$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Subscribing to an array [{array.join(' ')}]</h2>
        </section>
    );
}