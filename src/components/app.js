import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';

const App = function (props) {
  return (
      <div>
        <Switch>
          <Route path="" component={Home} />
        </Switch>
      </div>
  );
};

export { App as default };
