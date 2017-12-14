import React, { Component } from 'react';



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
    return <div className='move'  onMouseMove={this.mouseMove.bind(this)}>
      <h1><span className='moving' style={offset}>Ella Mae Arana</span></h1>
    </div>
  }
}

export default Parallex;
