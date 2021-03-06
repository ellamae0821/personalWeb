import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div>
          <a href="https://github.com/ellamae0821/">
            <i class="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ella-mae-arana/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="mailto:ella.d.arana@gmail.com">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    )
  }
}


export default Footer;




