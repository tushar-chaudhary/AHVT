/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Quizzes from './Quizzes';

import Header from 'components/Header';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/portal" component={Quizzes} />
      </Switch>
    </Header>
  </div>
);

export default App;
