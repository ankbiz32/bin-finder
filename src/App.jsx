import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Create these component pages
import Scan from './pages/Scan';
import MyIQ from './pages/MyIQ';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import Learn from './pages/Learn';


const App = () => {
  return (
    <Router>

      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/myiq" element={<MyIQ />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
};

export default App;
