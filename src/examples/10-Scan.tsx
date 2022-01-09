import { useEffect } from "react";
import { from, scan } from "rxjs";

export const Scan = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        const numbers$ = from(array).pipe(
            scan(((acc, val) => acc + val)), // 1, 3, 6, 10, 15
        ).subscribe(console.log);

        numbers$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Sum the numbers - {array.join(' ')}</h2>
            <p>
                <i>Scan will show all values emitted on source observable. </i>
            </p>
            <p>
                <i>Reduce will show only the final value emitted on source observable.</i>
            </p>
        </section>
    );
}