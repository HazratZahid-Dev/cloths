// import React, { useState } from 'react';
import Nav from '../src/compunents/Navbar';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../src/Pages/Company'  
import About from '../src/Pages/Men' 
// import Portfolio from '../src/Pages/Portfolio' 
// import Services from '../src/Pages/Services' 
// import Skill from '../src/Pages/skill' 
// import Process from '../src/Pages/Process' 
// import Women from '../src/Pages/Women'  
 
function App() {

  return (
    <>
      <Router>
        <div>
          <Nav />
          <Routes>
            
            <Route path='/' element={<Home  />} />
     
           <Route path='/About' element={<About/>} />
        
           {/* <Route path='/Portfolio' element={<Portfolio/>} />
        
            <Route path='/Services' element={<Services/>} />
          
          <Route path="/Skill" element={<Skill/>} />
           <Route path="/Process" element={<Process/>} />  */}
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
