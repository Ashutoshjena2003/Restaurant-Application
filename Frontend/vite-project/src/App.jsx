import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Success from './pages/success';
import Footer from './components/Footer'
import CustomerService from './components/CustomerService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>

      <Toaster position="top-center" />
      
    </Router>

    
  )
}

export default App
