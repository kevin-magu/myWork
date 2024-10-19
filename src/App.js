import React from 'react'
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/General_c/Navbar';
import Footer from './components/General_c/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
