import { useState } from 'react'
import Login from './Components/Login'
import BarcodeScanner from './Components/react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import Navbar from "./Components/Navbar";
import Shop from './Components/Shop';
import '/public/Navbar.css'
function App(){
    
    return(
        <Router>
           <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Home component */}
          <Route path="/Login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} /> 
          <Route path="/Scan" element={<BarcodeScanner />} />
          <Route path="/Shop" element={<Shop />} /> {/* NewPage component */}
        </Routes>
      </Router>
        
        
)
}
  
export default App
