import React from "react";
// import {Link} from "react-router-dom";
import "../CSS/NavBar.css";
const NavBar = () => {
      return(
        <nav>
            <div className="NavBar"> 
            
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      
            </div>

            <section className="underline">
<u/>
</section>

        </nav>
  

      );
};

export default NavBar;