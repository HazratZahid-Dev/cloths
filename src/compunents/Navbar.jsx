import React, { useState } from "react";
import { FaTimes, FaBars,FaSearch } from "react-icons/fa";
 import "../style/ClothsNav.css";
// import logo from "../Images/red.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="cloths-navbar ">
      <div>
      
        {/* <p className="logo_p text-red-600 font-bold"><span>High </span> Drinks</p> */}
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <Link to="/">Login</Link> */}
        <li><Link to="/" onClick={() => seticon(!icon)}>Women</Link></li>
        <li><Link to="/Men" onClick={() => seticon(!icon)}>Men</Link></li>
        <li><Link to="/Company" onClick={() => seticon(!icon)}>  Companay</Link></li>
        <li><Link to="/Product" onClick={() => seticon(!icon)}>Product</Link></li>
      
        <li><Link to="/CreateAcount" onClick={() => seticon(!icon)}> CreateAcount  </Link></li>
        <li><Link to="/SignIn" onClick={() => seticon(!icon)}>SignIn</Link></li>
        
      </ul>
      
  

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
      <div className=" flex gap-2">
      <input type='text' placeholder="search" className="nav-search" ></input>  
    
    <p className="text-gray-600 mt-2 tracking-widest"><FaSearch /></p>
      </div>
    </div>
  );
};

export default Navbar;
