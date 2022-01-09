import { useEffect } from "react";
import { from, take } from "rxjs";

export const Take = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        const numbers$ = from(array).pipe(
            take(3)
        ).subscribe(console.log); /// 1, 2, 3

        return () => numbers$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Takes only the first 3 numbers from {array.join(' ')}</h2>
        </section>
    );
}