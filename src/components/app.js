import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BeerIndex from './beerIndex';
import BeerView from './beerView';
import { Link } from 'react-router-dom'

const App = function (props) {
  return (
      <div>
      <div className='container'>
      <Link to={{pathname: `/`}} >
      <div className='beerTableHeader'>
      <h3>The Beerlover's Guide To The Galaxy</h3>
      </div>
    </Link>
        <Switch>
          <Route path="/:id" component={BeerView} props={props} />
          <Route path="" component={BeerIndex} />
        </Switch>
        </div>
      </div>
  );
};

export { App as default };
