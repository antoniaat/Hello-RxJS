import { useEffect, useState } from "react";
import { from } from "rxjs";

export interface Properties {
    height: string
    name: string
    skinColor: string
}

export interface Person {
    properties: Properties,
    description: string,
}

export interface Result {
    message: string,
    result: Person,
}

export const endpoint = 'https://www.swapi.tech/api/people/1';

export const Promises = () => {
    const [person, setPerson] = useState<Person>();

    useEffect(() => {
        const person: Promise<Result> = fetch(endpoint).then(res => res.json());
        const person$ = from(person).subscribe(({ result }) => {
            setPerson({
                properties: result.properties,
                description: result.description,
            });
        });

        return () => person$.unsubscribe();
    }, []);

    return (
        <section className="row">
            <h2>Subscribing to promise results</h2>
            <article>
                <p>{person?.description}</p>
                <ul>
                    <li>
                        Name: {person?.properties.name}
                    </li>
                    <li>
                        Height: {person?.properties.height}
                    </li>
                </ul>
            </article>
        </section>
    );
};