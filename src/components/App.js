import React, { Component } from 'react';
import Parallex from '../containers/Parallex';
import Header from '../containers/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Parallex/>
      </div>
    )
  }
}

export default App;
