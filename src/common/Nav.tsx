import '../styles/components/nav.scss';

import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import { filter, from, map, pluck, scan, tap } from 'rxjs';
import { useEffect, useState } from 'react';

export interface NavigationItem {
    id: number,
    title: string,
    link: string,
}

export interface NavigationSection {
    title: string,
    items: NavigationItem[],
}

export interface NavigationList extends Array<NavigationSection> { }

export const navigationListData: NavigationList = [
    {
        title: 'Creation Operators',
        items: [
            { id: 1, title: 'Click Event', link: '/from-click-event' },
            { id: 2, title: 'Array', link: '/from-array' },
            { id: 3, title: 'Mouse Move', link: '/mouse-move' },
            { id: 4, title: 'Promises', link: '/promises' },
        ]
    },
    {
        title: 'RxJS Operators',
        items: [
            { id: 5, title: 'Pipe', link: '/pipe' },
            { id: 6, title: 'Pluck', link: '/pluck' },
            { id: 7, title: 'MapTo', link: '/map-to' },
            { id: 8, title: 'Scrollbar', link: '/scrollbar' },
            { id: 9, title: 'Reduce', link: '/reduce' },
            { id: 10, title: 'Scan', link: '/scan' },
            { id: 11, title: 'Tap', link: '/tap' },
        ]
    },
    {
        title: 'Filtering Operators',
        items: [
            { id: 12, title: 'Take', link: '/take' },
            { id: 13, title: 'First', link: '/first' },
            { id: 14, title: 'Take While', link: '/take-while' },
            { id: 15, title: 'Distinct Until Changed', link: '/distinct-until-changed' },
        ]
    },
    {
        title: 'Rate Limiting Operators',
        items: [
            { id: 16, title: 'Debounce Time', link: '/debounce-time' },
            { id: 17, title: 'Throttle Time', link: '/throttle-time' },
        ]
    },
    {
        title: 'Transformation Operators',
        items: [
            { id: 18, title: 'Merge All & Merge Map', link: '/merge-all' },
            { id: 19, title: 'Switch Map', link: '/switch-map' },
            { id: 20, title: 'Concat Map', link: '/concat-map' },
            { id: 21, title: 'Exhaust Map', link: '/exhaust-map' },
            { id: 22, title: 'Catch Error', link: '/catch-error' },
        ]
    },
    {
        title: 'Combination Operators',
        items: [
            { id: 23, title: 'Concat', link: '/concat' },
            { id: 24, title: 'Merge', link: '/merge' },
            { id: 25, title: 'Combine Latest', link: '/combine-latest' },
        ]
    }
]

export const getNavItemLinkByTitle = (title: string) => {
    return navigationListData.map(({ items }) => {
        const res = items.filter(item => item.title === title);

        return res.length > 0
            ? res[0].link
            : null
    }).filter(item => item !== null);
}

export const Nav = () => {
    return (
        <ul className='list'>
            <SearchBar />
            <h1 className="list-title">Hello RxJS!</h1>
            {navigationListData.map(({ title, items }) => (
                <>
                    <h4 className="list-subtitle">{title}</h4>
                    {items.map((item) => (
                        <Link
                            to={item.link}
                            className='list-link'>
                            <li className='list-item'>{item.id}. {item.title}</li>
                        </Link>
                    ))}
                </>
            ))}
        </ul>
    );
}