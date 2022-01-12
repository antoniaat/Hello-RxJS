import { useEffect, useRef, useState } from "react";
import { combineLatest, combineLatestWith, fromEvent, interval, map, mapTo, merge, pluck, take, tap } from "rxjs";

export const CombineLatest = () => {
    const [result, setResult] = useState(0);
    const firstNumberRef = useRef(null);
    const secondNumberRef = useRef(null);

    useEffect(() => {
        if (firstNumberRef.current && secondNumberRef.current) {
            const firstNumberInput = fromEvent(firstNumberRef.current, 'input');
            const secondNumberInput = fromEvent(secondNumberRef.current, 'input');

            const calculation$ = firstNumberInput.pipe(
                combineLatestWith(secondNumberInput),
                map(([first, second]: [first: any, second: any]) => Number(first.target.value) + Number(second.target.value)),
            ).subscribe(res => {
                setResult(res);
            });

            return () => calculation$.unsubscribe();
        }
    }, []);

    return (
        <section className='row'>
            <article>
                <label className='row' htmlFor="first-number">
                    <input ref={firstNumberRef} type="number" id="first-number" />
                </label>
                +
                <label className='row' htmlFor="second-number">
                    <input ref={secondNumberRef} type="number" id="second-number" />
                </label>
            </article>
            <article>
                <h2>= {result}</h2>
            </article>
        </section>
    );
}