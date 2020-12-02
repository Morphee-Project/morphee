import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from '../src/pages/Home'
import Dashboard from "./pages/Dashboard";
import Effect from "./pages/Effect";


function App() {
  return (
      <Router>

          <Switch>
              <Route path="/home">
                  <HomePage />
              </Route>
              <Route path="/dashboard">
                  <Dashboard />
              </Route>
              <Route path="/effect">
                  <Effect />
              </Route>
          </Switch>

      </Router>
  );
}

export default App;
