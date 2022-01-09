import { useEffect, useState } from "react";
import { interval, map, Observable, takeWhile } from "rxjs";

export const TakeWhile = () => {
    const numbers$: Observable<number> = interval(1000);
    const [currentNum, setCurrentNum] = useState(0);

    const observer = {
        next: (value: number) => console.log(value, 'next'),
        complete: () => console.log('complete!')
    }

    useEffect(() => {
        numbers$.pipe(
            takeWhile((item) => item <= 4), // Try out with filter
            map(item => {
                setCurrentNum(item);
                return item;
            }),
        ).subscribe(observer)
    }, []);

    return (
        <section className="row">
            <h1>Complete a stream when condition is met: {currentNum}</h1>
        </section>
    );
}