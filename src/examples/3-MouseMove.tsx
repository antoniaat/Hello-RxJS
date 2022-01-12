

import { useEffect, useRef, MutableRefObject } from "react";
import { delay, fromEvent, map } from "rxjs";

export const MouseMove = () => {
   const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const mousemove$ = fromEvent(containerRef.current, 'mousemove')
         .pipe(
            map(event => `Event time: ${event.timeStamp}`),
            delay(900)
         ).subscribe(console.log);

      return () => { mousemove$.unsubscribe() }
   }, []);

   return (
      <section className="row">
         <div className="container" ref={containerRef}>
            Move here
         </div>
      </section>
   );
}