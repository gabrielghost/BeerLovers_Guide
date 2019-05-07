import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BeerIndex from './beerIndex';
import BeerView from './beerView';
import Header from './header';
import { Link } from 'react-router-dom'

const App = function (props) {
  return (
      <div>
      <div className='container'>
      <Header />
        <Switch>
          <Route path="/beer/:id" component={BeerView} props={props} />
          <Route path="" component={BeerIndex} />
        </Switch>
        </div>
      </div>
  );
};

export { App as default };
