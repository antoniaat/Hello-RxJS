import { useEffect } from "react";
import { delay, from } from "rxjs";

export const Array = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        from(array).pipe(delay(1200))
            .subscribe(val => console.log(val));
    }, []);

    return (
        <section className="row">
            <h2>Subscribing to an array [{array.join(' ')}]</h2>
            <p>
                <strong>from</strong> -
                Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object
            </p>
        </section>
    );
}