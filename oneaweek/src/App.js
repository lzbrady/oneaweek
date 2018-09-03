import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";

import './App.css';

import HomePage from './Home/HomePage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            {/* <Route exact path="/blog" component={BlogPage}/> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
