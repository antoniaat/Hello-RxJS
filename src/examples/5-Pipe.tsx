import { useEffect } from "react";
import { distinct, filter, map, of } from "rxjs";

export const Pipe = () => {
    useEffect(() => {
        const source$ = of(6, 6, 6, 7, 8, 9, 10, 12, 12, 12, 14);
        const res$ = source$.pipe(
            map(x => x * 10),
            filter(num => num % 2 === 0),
            distinct(),
        );

        // The pipable operator is a function which takes observables as a input and 
        // it returns another observable (previous observable stays unmodified)
        // source$.subscribe(val => console.log(val));
        res$.subscribe(val => console.log(val));
    }, []);

    return (
        <section className="row">
            <h2>[6, 6, 6, 7, 8, 9, 10, 12, 12, 12, 14]</h2>
            <ul>
                <li>
                    Multiply them by 10
                </li>
                <li>
                    Filter the even numbers
                </li>
                <li>
                    Take only the unique numbers
                </li>
            </ul>
        </section>
    );
}