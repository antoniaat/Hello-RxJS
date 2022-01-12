import { useEffect, useState } from "react";
import { from, pluck } from "rxjs";
import { endpoint, Person, Properties } from "./4-Promises";

export const validProperties = 'height' || 'name' || 'skin_color';

export const isValidProperty = (prop: any) => {
    return validProperties.includes(prop);
}

export const Pluck = () => {
    const [person, setPerson] = useState<Properties>();

    useEffect(() => {
        const person: Promise<Person> = fetch(endpoint).then(res => res.json());
        const res$ = from(person).pipe(
            pluck('result', 'prkmkljoperties'),
        );

        res$.subscribe((result: any) => {
            setPerson({
                height: result.height,
                name: result.name,
                skinColor: result.skin_color,
            });
        });
    }, []);

    return (
        <section className="row">
            <h2>Subscribing to promise results</h2>
            <article>
                <ul>
                    <li>
                        Name: {person?.name}
                    </li>
                    <li>
                        Height: {person?.height}
                    </li>
                    <li>
                        Skin Color: {person?.skinColor}
                    </li>
                </ul>
            </article>
        </section>
    );
}