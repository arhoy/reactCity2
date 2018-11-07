import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import homePage from './pages/homePage/homePage';
import matchesPage from './pages/matchesPage/matchesPage';
import contactPage from './pages/contactPage/contactPage';
import signInPage from './pages/signInPage/signInPage';
import dashboardPage from './pages/dashboardPage/dashboardPage';
import moshPage from './pages/moshPage/moshPage';

import DashboardMatches from './components/Dashboard/DashboardMatches/DashboardMatches';

import Layout from './hoc/Layout/Layout'
import PrivateRoute from './components/authRoutes/PrivateRoutes';
import PublicRoute from './components/authRoutes/PublicRoutes';


const App = (props)=> {
  console.log(props);
    return (
      <div className="App">
      <Layout>
          <Switch>
              <PrivateRoute exact path = "/dashboard" component = {dashboardPage} {...props} />
              <PrivateRoute path = "/dashboard_matches/edit_match/:id" component = {DashboardMatches} {...props} />
              <PrivateRoute path = "/dashboard_matches/edit_match" component = {DashboardMatches} {...props} />
              <PublicRoute restricted = {true} path = "/signin" component = {signInPage} {...props} />
              <Route path = "/basic" component = {homePage}/>
              <Route path = "/matches" component = {matchesPage}/>
              <Route path = "/contact" component = {contactPage}/>
              <Route path = "/" component = {moshPage}/>
           </Switch>
      </Layout>
    
      </div>
    );
  }

export default App;


// public route: if user is signed in, than they should not see the sign in page.
// private route: if user is signed out, than they should not be able to see the dashboard page.