import React from 'react';
import logo from '../ea_Logo.svg'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';




const Header = () => {

  return (
    <StickyHeader

      // This is the sticky part of the header.
      header={
        <div className="header_wrapper">

            <div className="header_logo">
              <Link to="/">
                <img alt="logo" src={logo} />
              </Link>
            </div>
            <div className="navtexts">
              <div className="header_text">
                <Link to="/resume">
                Resume
                </Link>
              </div>
              <div className="header_text">
                <Link to="/portfolio">
                Portfolio
                </Link>
              </div>
              <div className="header_text">
                <Link to="/contact">
                  Contact Me
                </Link>
                </div>
            </div>



        </div>
      }
      children = {
        <div className="childrenImg"> </div>
      }
    >

    </StickyHeader>
  )
}

export default Header;
