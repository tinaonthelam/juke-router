import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Albums from './components/Albums.js';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Artists from './components/Artists';
import Artist from './components/Artist';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route exact path="/" component={AppContainer}>
        <IndexRedirect to="/albums/" />
        <Route path="/albums" component={Albums} />
        <Route path="/albums/:albumId" component={Album} />
        <Route path="/artists" component={Artists} />
        <Route path="/artists/:artistId" component={Artist} />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);
