import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import homePage from './pages/homePage/homePage';
import matchesPage from './pages/matchesPage/matchesPage';

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
          <Switch>
              <Route path = "/basic" component = {homePage}/>
              <Route path = "/matches" component = {matchesPage}/>
           </Switch>
      </Layout>
    
      </div>
    );
  }
}

export default App;
