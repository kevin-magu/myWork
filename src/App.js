import React from 'react'
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/General_c/Navbar';
import Footer from './components/General_c/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={ <Homepage /> }/>
      </Routes>  
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
