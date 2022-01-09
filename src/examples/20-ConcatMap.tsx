import '../styles/components/search-bar.scss';

import { useEffect } from "react";
import { concatMap, delay, from, of, } from "rxjs";

export const saveAnswer = (answer: string) => {
    // Simulate delayed request
    return of(`Saved: ${answer}`).pipe(
        delay(1500)
    )
}

export const favEventAnswers = ['mergeMap', 'switchMap', 'concatMap'];

export const ConcatMap = () => {
    const onClick = (click: any) => {
        const clicks$ = from(click).pipe(
            concatMap((e: any) => saveAnswer(e.target.value))
        ).subscribe(console.log);

        return () => clicks$.unsubscribe();
    }

    useEffect(() => {

    }, []);

    return (
        <section className='row'>
            <h1>When order of the requests matter</h1>
            <article>
                <h2>What is your favourite operator?</h2>
                {
                    favEventAnswers.map((answer, index) => (
                        <div>
                            <label htmlFor={answer}>
                                <input
                                    onClick={onClick}
                                    type="radio"
                                    name="operator"
                                    value={answer}
                                />
                                <span>{answer}</span>
                            </label>
                        </div>
                    ))
                }
            </article>
        </section>
    );
}