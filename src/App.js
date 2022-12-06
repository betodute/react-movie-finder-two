import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MovieFinder from './Home';
import "./style.css";

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link id="mainHeadline" className="navbar-brand ml-5" to="/">Movie Finder</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MovieFinder/>} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
