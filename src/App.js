import React from 'react';
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
