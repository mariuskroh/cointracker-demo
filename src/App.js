import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CryptoStatusWidget from "./components/CryptoStatusWidget";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <CryptoStatusWidget />
      </div>
    </Router>
  );
}

export default App;
