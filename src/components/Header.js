import React from "react";


const Header = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark w-100 sticky-top">
        <h2 className="navbar-brand mx-auto">{props.text}</h2>
      </nav>
    );
};

export default Header
