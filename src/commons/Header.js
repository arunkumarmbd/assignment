import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <header className="header customHeader" id="header">
          <Navbar className="navbar container">
            <div className="navbar-left">
                <a onClick={() => Navigate("/")} className="brand customLogo"><img src={logo} alt="logo" /></a>
                <div className="burger" id="burger">
                  <span className="burger-line"></span>
                  <span className="burger-line"></span>
                  <span className="burger-line"></span>
                </div>
            </div>
            <div className="navbar-center">
                <span className="overlay"></span>
                <div className="menu" id="menu">
                  <div className="menu-header">
                      <span className="menu-arrow"><i className="bx fa-solid fa-angle-left"></i></span>
                      <span className="menu-title"></span>
                  </div>

                  <ul className="menu-inner">
                      <li className="menu-item"><a onClick={() => Navigate("/")}  className="menu-link">Shop</a></li>
                      <li className="menu-item menu-dropdown">
                        <span className="menu-link">Account<i className="bx fa-solid fa-angle-right"></i></span>
                        <div className="submenu megamenu megamenu-column-1">
                            <ul className="submenu-list">
                              <li className="submenu-item"><a href="#" className="submenu-link">Login</a></li>
                              <li className="submenu-item"><a href="#" className="submenu-link">Register</a></li>
                              <li className="submenu-item"><a href="#" className="submenu-link">Track Order</a></li>
                              <li className="submenu-item"><a href="#" className="submenu-link">Help</a></li>
                            </ul>
                        </div>
                      </li>
                  </ul>
                </div>
            </div>
            <div className="navbar-right">
                <div className="userIcons">
                  <a href="#"><i className="fa-regular fa-user"></i></a>
                </div>
                <div className="begIcons">
                  <a onClick={() => Navigate("/cart")}><i className="fa-solid fa-bag-shopping"></i>
                      {/* <span className="item-count gbl-bdge-bck-c">{cartItems}</span> */}
                  </a>
                </div>
            </div>
          </Navbar>
      </header>
    </div>
  );
}

export default Header;
