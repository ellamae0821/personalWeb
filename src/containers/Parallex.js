import React, { Component } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import SASS from '../assets/sass.png';
import JS from '../assets/js.png';



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
          <h1>
            <span className='moving' style={offset}>Ella Mae Arana</span>
          </h1>
          <h3 className='jobTitle'>
            Full Stack Javascript Web Developer
          </h3>
        </div>
      </div>
    )

  }
}

export default Parallex;
