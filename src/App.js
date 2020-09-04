import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cointracker from "./components/Cointracker";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Cointracker />
      </div>
    </Router>
  );
}

export default App;
