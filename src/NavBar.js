import React from "react"
import {Link} from 'react-router-dom';
import"./CSS/NavBar.css";

const NavBar= () =>{
    return(
        <nav>
            <div className="box">
        <Link to="/">LandingPage</Link>
        <Link to="/Counter">Counter</Link>
        </div>
        </nav>
        

    )
}
export default NavBar;