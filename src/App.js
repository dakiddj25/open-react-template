import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import ProjectAim from './views/ProjectAim';
import Lesson1 from './views/lesson1';
import Lesson2 from './views/lesson2';
import PracticeConfident from './views/PracticeConfidence';
import Lesson3 from './views/lesson3';
import GuestSpeaker from './views/GuestSpeaker';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/ProjectAim" component={ProjectAim} layout={LayoutDefault} />
          <AppRoute exact path="/Lesson1" component={Lesson1} layout={LayoutDefault} />
          <AppRoute exact path="/Lesson2" component={Lesson2} layout={LayoutDefault} />
          <AppRoute exact path="/BuildingSelfConfidence" component={PracticeConfident} layout={LayoutDefault} />
          <AppRoute exact path="/GuestSpeaker" component={GuestSpeaker} layout={LayoutDefault} />
          <AppRoute exact path="/Lesson3" component={Lesson3} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;