import '../styles/elements/progress-bar.scss';

import { useEffect, useRef, MutableRefObject } from "react";
import { fromEvent, map } from "rxjs";
import { calculateElementScrollPosition } from "../utils/dom-utils";

export const Scrollbar = () => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const progressBarWrapper = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const progress$ = fromEvent(progressBarWrapper.current, 'scroll')
            .pipe(
                map((e: Event) => calculateElementScrollPosition(e.target as Element))
            );

        progress$.subscribe(percent => {
            ref.current.style.width = `${percent}%`;
        })
    }, []);

    return (
        <div ref={progressBarWrapper} className="progress-bar-page row">
            <section className="progress-bar-wrapper">
                <h4>Subscribing to a scroll event and displaying a progress bar</h4>
                <div ref={ref} className="progress-bar"></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam aperiam facilis minima aut error eveniet neque aliquid consequatur placeat et nesciunt quas, explicabo deserunt sint distinctio architecto illo iure?</p>
            </section>
        </div>
    );
}