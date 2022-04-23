import React from 'react';
// import Navbar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/Project';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.js'
import Home from './pages/home';

function App() {
    return (
        <body className="body">
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Portfolio />} />
                            <Route path="/me" element={<me />} />
                            <Route path="/apps" element={<apps />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router></body>
    );
}

export default App;