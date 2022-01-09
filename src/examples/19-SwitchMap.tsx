import '../styles/components/search-bar.scss';

import { useEffect, useRef, useState } from "react";
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, pluck, switchMap } from "rxjs";

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

export interface Brewery {
    name: string,
}

export const SwitchMap = () => {
    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState<Brewery[]>([]);

    useEffect(() => {
        if (searchRef.current) {
            const input$ = fromEvent(searchRef.current, 'input')
                .pipe(
                    pluck('target', 'value'),
                    distinctUntilChanged(),
                    map((e: any) => e.toString()),
                    switchMap((searchTerm: string) => {
                        return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`);
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