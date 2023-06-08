import React from "react";
import logo from './Images/logo.png';

const Header =() => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="logo" className="imag" width='100' height='70'/>
            <h1>Keep Notes</h1>
        </div>
    </>
  )
  

}
export default Header;