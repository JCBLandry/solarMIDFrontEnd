import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import ItemPage from './components/ItemPage'
import './styles/app.css';
// import "./styles.scss";

function App() {

  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ItemPage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path='/ItemPage' component={ItemPage} />
      </div>
    </Router>
  );
}

export default App;
