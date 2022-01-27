import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calendar from "./Calendar.js"
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  //leaving routes in place for when there are multiple pages
  return (
    <div id="app">
      <Router basename={process.env.PUBLIC_URL} version="1">
        <Switch>
          <Route path="/"><Calendar /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
