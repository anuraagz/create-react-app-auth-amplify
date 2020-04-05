import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// component imports
import HomePageComponent from "./components/homepage.component"
import InputComponent from "./components/input.component"
import DataComponent from "./components/data.component"
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Route exact path="/" component={HomePageComponent}/>
        <Route exact path="/input" component={InputComponent} />
        <Route exact path="/data" component={DataComponent}/>
      </div>
    </Router>
    );
  }
}

export default withAuthenticator(App, true);










