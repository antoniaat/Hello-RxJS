import './styles/styles.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page } from './common/Page';
import { Scrollbar } from './examples/8-Scrollbar';
import { ClickEvent } from './examples/1-ClickEvent';
import { Array } from './examples/2-Array';
import { MouseMove } from './examples/3-MouseMove';
import { Promises } from './examples/4-Promises';
import { Pipe } from './examples/5-Pipe';
import { Pluck } from './examples/6-Pluck';
import { MapTo } from './examples/7-MapTo';
import { Reduce } from './examples/9-Reduce';
import { Scan } from './examples/10-Scan';
import { Tap } from './examples/11-Tap';
import { Take } from './examples/12.Take';
import { TakeWhile } from './examples/14-TakeWhile';
import { First } from './examples/13-First';
import { DistinctUntilChanged } from './examples/15-DistinctUntilChanged';
import { DebounceTime } from './examples/16-DebounceTime';
import { MergeAll } from './examples/18-MergeAll';
import { SwitchMap } from './examples/19-SwitchMap';
import { ConcatMap } from './examples/20-ConcatMap';
import { ThrottleTime } from './examples/17-ThrottleTime';

export const App = () => {
  return (
    <Router>
      <Page>
        <Routes>
          <Route path="/from-click-event" element={<ClickEvent />} />
          <Route path="/from-array" element={<Array />} />
          <Route path="/pipe" element={<Pipe />} />
          <Route path="/pluck" element={<Pluck />} />
          <Route path="/map-to" element={<MapTo />} />
          <Route path="/reduce" element={<Reduce />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/tap" element={<Tap />} />
          <Route path="/mouse-move" element={<MouseMove />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/scrollbar" element={<Scrollbar />} />
          <Route path="/take" element={<Take />} />
          <Route path="/take-while" element={<TakeWhile />} />
          <Route path="/first" element={<First />} />
          <Route path="/distinct-until-changed" element={<DistinctUntilChanged />} />
          <Route path="/debounce-time" element={<DebounceTime />} />
          <Route path="/throttle-time" element={<ThrottleTime />} />
          <Route path="/merge-all" element={<MergeAll />} />
          <Route path="/switch-map" element={<SwitchMap />} />
          <Route path="/concat-map" element={<ConcatMap />} />
        </Routes>
      </Page>
    </Router>
  );
}