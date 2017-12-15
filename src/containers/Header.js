import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../logo_ea.svg'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
//const image = 'hiphipheader.jpg';
//const bgurl = require(`../assets/${image}`);



const Header = () => {

  return (
    <StickyHeader

      // This is the sticky part of the header.
      header={
        <div className="header_wrapper">

            <div className="header_logo"><img alt="logo" src={logo} /> </div>
            <div className="wtf">
              <div className="header_text">Resume</div>
              <div className="header_text">Portfolio</div>
              <div className="header_text">Contact Me</div>
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
