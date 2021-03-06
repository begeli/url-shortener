import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminSignIn from './pages/AdminSignIn';
import AdminHome from './pages/AdminHome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LinkAnalytics from './pages/LinkAnalytics';
import RedirectionPage from './pages/RedirectionPage';
import './styles/App.css';

export default class  App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      email: "",
      password: ""
    }

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  // Method name should change... I use it both in the sign up and the sign in
  handleSuccessfulAuth(email, password) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      email: email,
      password: password     
    })
  }

  render() {
    return (
      <div >
        <Router>
          <Switch >
          <Route 
              exact path="/redirection/:hash" 
              component={RedirectionPage} 
            />
            <Route 
              exact path="/asignin" 
              render={props => (
                  <AdminSignIn {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} loggedInStatus={this.state.loggedInStatus}/>
                )
              }
              //component={AdminSignIn} 
            />
            <Route 
              exact path="/ahome" 
              render={props => (
                  <AdminHome email={this.state.email}/>
                )
              }
            />
            <Route 
              exact path="/" 
              render={ props => (
                  <SignIn {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} loggedInStatus={this.state.loggedInStatus}/>
                )
              }
            />
            <Route 
              exact path="/signin" 
              render={ props => (
                  <SignIn {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} loggedInStatus={this.state.loggedInStatus}/>
                )
              }
            />
            <Route 
              exact path="/signup" 
              render={ props => (
                <SignUp {...props} handleSuccessfulAuth={this.handleSuccessfulAuth} />
              )}
            />
            <Route 
              exact path="/home" 
              render={ props => (
                  <Home email={this.state.email}/>
                )
              }
            />
            <Route 
              exact path="/analytics" 
              render={ props => ( 
                <LinkAnalytics email={this.state.email} password={this.state.password}/>
               )
              }
            />
          </Switch>
        </Router>
        
      </div>
    );
  }  
}


