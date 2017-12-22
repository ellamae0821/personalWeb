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
import Resume from './components/Resume';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <Router>
    <div>
      <Header/>
        <div>
        <Route exact path="/" component={App} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        </div>
      <Footer/>
    </div>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
