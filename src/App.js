import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from '../src/pages/Home'
import Dashboard from "./pages/Dashboard";
import Body from "./pages/Body";
import Effect from "./pages/Effect";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Signin from "./pages/Signin";


function App() {
  return (
      <Router>

          <Switch>
              <Route path="/home">
                  <HomePage />
              </Route>
              <Route path="/Results">
                  <Results />
              </Route>
              <Route path="/dashboard">
                  <Dashboard />
              </Route>
              <Route path="/effect">
                  <Effect />
              </Route>
              <Route path="/body">
                  <Body />
              </Route>
              <Route path="/quiz">
                  <Quiz />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/signin">
                  <Signin />
              </Route>
              <Route path="/">
                  <HomePage />
              </Route>
          </Switch>

      </Router>
  );
}

export default App;
