import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './containers/Header';

ReactDOM.render(
  <Router>
    <div>
      <Header/>
      <div>
      <Route exact path="/" component={App} />
      </div>
    </div>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
