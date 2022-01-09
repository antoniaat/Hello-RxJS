import { useEffect } from "react";
import { filter, map, of, tap } from "rxjs";

export const Tap = () => {
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        const arraySource$ = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
            map(x => {
                console.log(x, 'before map')
                return x;
            }),
            map(x => x * 10),
            map(x => {
                console.log(x, 'after map');
                return x;
            }),
            filter(x => x > 11),
            map(x => {
                console.log(x, 'after filter');
                return x;
            }),
        ).subscribe();

        // const arraySource$ = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
        //     tap(x => {
        //         console.log(x, 'before map')
        //         return 100;
        //     }),
        //     map(x => x * 10),
        //     tap(x => console.log(x, 'after map')),
        //     filter(x => x > 11),
        //     tap(x => console.log(x, 'after filter')),
        // ).subscribe();

        return () => arraySource$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Debugging an array [{array.join(' ')}]</h2>
            <p>
                <strong>tap()</strong> -
                Used to perform side-effects for notifications from the source observable
            </p>
        </section>
    );
}