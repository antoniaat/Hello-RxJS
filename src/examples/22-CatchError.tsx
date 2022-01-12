import '../styles/components/search-bar.scss';

import { useEffect, useRef, useState } from "react";
import { ajax } from 'rxjs/ajax';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, fromEvent, mergeMap, pluck } from "rxjs";

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

export interface Brewery {
    name: string,
}

export const CatchError = () => {
    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState<Brewery[]>([]);

    useEffect(() => {
        if (searchRef.current) {
            const input$ = fromEvent(searchRef.current, 'input')
                .pipe(
                    pluck('target', 'value'),
                    distinctUntilChanged(),
                    debounceTime(300),
                    mergeMap((searchTerm) => {
                        return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`).pipe(
                            catchError(() => EMPTY)
                        );
                    }),
                ).subscribe((res: any) => {
                    setSearchResults(res);
                });

            return () => input$.unsubscribe();
        }
    }, []);

    return (
        <section className='search-bar search-bar-demo row'>
            <label className='search-bar-label'>
                <input ref={searchRef} className='search-bar-input' type="text" placeholder="Search.." />
            </label>
            <ul className='search-bar-dropdown'>
                {searchResults.map((item, index) => (
                    <li key={index} className='search-bar-dropdown-item'>
                        {item.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}