import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";

//component
import Home from "./pages/Home"

//stylesheet
import "./App.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Home />
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);