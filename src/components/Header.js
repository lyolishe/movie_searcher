import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    const scrollHendler = () => {

    };
    return (
      <nav className="navbar navbar-dark bg-dark w-100 fixed-top">
          <h2 className="navbar-brand">{props.text}</h2>
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to='/' className="nav-link" >Домой</Link>
              </li>
              <li className='nav-item'>
                  <Link to="/about" className='nav-link'>О приложении</Link>
              </li>
          </ul>
      </nav>
    );
};

export default Header
