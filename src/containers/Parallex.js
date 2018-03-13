import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class Parallex extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
    this.state = {
      mousePos: {x: 0, y: 0}
    }
  }
  mouseMove(e) {
    this.setState({
      mousePos: {
        x: e.pageX - (window.innerWidth / 2),
        y: e.pageY - (window.innerHeight / 2)
      }
    })
  }

  render() {
    let offset = {
      transform: `translate3d( ${this.state.mousePos.x / -40}px, ${this.state.mousePos.y / -40}px, 0 )`,

    }
  return (
    <div>
      <div className='move'  onMouseMove={this.mouseMove.bind(this)}>
        <div className="ella">
          <h1>
            <span className='moving' style={offset}>Ella Mae Arana</span>
          </h1>
        </div>
      </div>
      <h3 className='jobTitle'>
        Full Stack Javascript Web Developer
      </h3>

      <Link to="/portfolio">
          <div className="login-btn">
            <div className="login-btn2">
              <span className="login-span">About Me</span>
              <span className="login-span">
              Click Me!
              </span>
            </div>
          </div>
        </Link>
      </div>
    )

  }
}

export default Parallex;
