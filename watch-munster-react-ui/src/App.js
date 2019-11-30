import React from 'react';

import Header from './Components/Header'
import Main from './Components/Main';
import './App.css';

export default class App extends React.Component {

  /* constructor() {
    super();
  } */

  render() {

    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <Main />
        </div>
      </React.Fragment>

    )
  }
}
