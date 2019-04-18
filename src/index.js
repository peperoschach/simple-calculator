import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <h1>Calculator</h1>
    <Calculator />
  </Fragment>
, document.getElementById('root'));

serviceWorker.unregister();
