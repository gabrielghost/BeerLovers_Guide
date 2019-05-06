import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './components/app';
import history from './history';
import store from './store';
import './style/style.scss';
import './fonts/Open_Sans/OpenSans.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container-fluid')
);
