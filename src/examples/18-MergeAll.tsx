import '../styles/components/search-bar.scss';

import { useEffect, useRef, useState } from "react";
import { debounceTime, distinctUntilChanged, filter, from, fromEvent, map, mergeAll, mergeMap, pluck, scan } from "rxjs";
import { navigationListData } from '../common/Nav';

export const MergeAll = () => {
    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState<string[]>([]);

    // // 1. Here we have an observable with the input events
    // useEffect(() => {
    //     if (searchRef.current) {
    //         const input$ = fromEvent(searchRef.current, 'input')
    //             .pipe(
    //                 debounceTime(400),
    //                 pluck('target', 'value'),
    //                 distinctUntilChanged(),
    //             ).subscribe(console.log);

    //         return () => input$.unsubscribe();
    //     }
    // }, []);

    // // 2. Here we have an observable with the data
    // useEffect(() => {
    //     const data$ = from(navigationListData).pipe(
    //         pluck('items'),
    //         map(items => items.map(item => item.title)),
    //         scan((acc, val) => acc.concat(val)),
    //     ).subscribe(console.log);

    //     return () => data$.unsubscribe();
    // }, []);

    // // 3. Let's merge them - EW
    // useEffect(() => {
    //     if (searchRef.current) {
    //         const input$ = fromEvent(searchRef.current, 'input')
    //             .pipe(
    //                 debounceTime(400),
    //                 pluck('target', 'value'),
    //                 distinctUntilChanged(),
    //                 map((item: any) => {
    //                     const res$ = from(navigationListData).pipe(
    //                         pluck('items'),
    //                         map(items => items.map(item => item.title)),
    //                         scan((acc, val) => acc.concat(val)),
    //                         map(elements => elements.filter(
    //                             el => el.toLowerCase().startsWith(item.toLowerCase())
    //                         ))
    //                     );
    //                     return res$;
    //                 })
    //             ).subscribe(obs$ => {
    //                 obs$.subscribe(console.log)
    //             });

    //         return () => input$.unsubscribe();
    //     }
    // }, []);

    // 3. Let's merge them - YEAH
    useEffect(() => {
        if (searchRef.current) {
            const input$ = fromEvent(searchRef.current, 'input')
                .pipe(
                    debounceTime(400),
                    pluck('target', 'value'),
                    distinctUntilChanged(),
                    map((searchedVal: any) => {
                        return from(navigationListData).pipe(
                            pluck('items'),
                            map(items => items.map(item => item.title)),
                            scan((acc, val) => acc.concat(val)),
                            map(elements => elements.filter(
                                el => el.toLowerCase().startsWith(searchedVal.toLowerCase())
                            ))
                        );
                    }),
                    mergeAll(),
                ).subscribe(console.log);

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
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}