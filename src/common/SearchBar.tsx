import '../styles/components/search-bar.scss';

import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { debounceTime, distinctUntilChanged, from, fromEvent, map, mergeMap, pluck, scan } from "rxjs";
import { getNavItemLinkByTitle, navigationListData } from './Nav';

export const SearchBar = () => {
    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (searchRef.current) {
            const search$ = fromEvent(searchRef.current, 'input')
                .pipe(
                    debounceTime(400),
                    pluck('target', 'value'),
                    distinctUntilChanged(),
                    mergeMap((item: any) => {
                        return from(navigationListData).pipe(
                            pluck('items'),
                            map(items => items.map((item) => item.title)),
                            scan((acc, val) => acc.concat(val)),
                            map(elements => elements.filter(el => {
                                return el.toLowerCase().startsWith(item.toLowerCase());
                            })),
                        )
                    }),
                    map(res => setSearchResults(res))
                ).subscribe();

            return () => search$.unsubscribe();
        }
    }, []);

    const closeDropdown = () => setIsDropdownOpen(false);
    const openDropdown = () => setIsDropdownOpen(true);

    useEffect(() => {
        searchResults.length > 0
            ? openDropdown()
            : closeDropdown();
    }, [searchResults]);

    return (
        <section className='search-bar row'>
            <label className='search-bar-label'>
                <input ref={searchRef} className='search-bar-input' type="text" placeholder="Search.." />
            </label>
            <OutsideClickHandler onOutsideClick={closeDropdown}>
                {isDropdownOpen &&
                    <ul className={`search-bar-dropdown ${isDropdownOpen && 'active'}`}>
                        {searchResults.map((item, index) => {
                            const itemLink = getNavItemLinkByTitle(item)[0];

                            return (
                                <>
                                    {itemLink && (<Link to={itemLink}>
                                        <li key={index} className='search-bar-dropdown-item'>
                                            {item}
                                        </li>
                                    </Link>)}
                                </>
                            )
                        })}
                    </ul>}
            </OutsideClickHandler>
        </section >
    );
}