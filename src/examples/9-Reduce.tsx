import { useEffect } from "react";
import { from, reduce } from "rxjs";

export const Reduce = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        const numbers$ = from(array).pipe(
            reduce(((acc, val) => acc + val)),
        ).subscribe(console.log);

        return () => numbers$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Sum the numbers - {array.join(' ')}</h2>
        </section>
    );
}