import React from 'react';
import Header from "./component/Header";
import Hero from "./component/Hero";
import AboutPage from "./component/About";
import Contact from "./component/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Home" element={<Hero />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
