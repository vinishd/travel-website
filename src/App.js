import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Roommates from './components/pages/Roommates';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" component = {Services } />
          <Route path='/roommates' component = {Roommates} />
          <Route path='/sign-up' component = {SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
