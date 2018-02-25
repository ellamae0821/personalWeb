import React, { Component } from 'react';
import avatar from '../assets/ella.jpg'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import SASS from '../assets/sass.png';
import JS from '../assets/js.png';
import GIT from '../assets/git.png';
import NODE from '../assets/node.png';
import TERMINAL from '../assets/terminal.png';
import WP from '../assets/wp.png';
import REACT_LOGO from '../assets/react.svg';
import PSQL from '../assets/psql.png';
import ANGULAR from '../assets/angular.png';
import BEK from '../assets/bek.png';
import CMS from '../assets/cms.png';
import GULP from '../assets/gulp.png';




class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div class="container">
          <div className="avatar-flip">
          <img src={avatar} height="150" width="119"/>
            <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
          </div>
            I'm a Full Stack Developer from Honolulu, <br/> who loves to build creative and useful tools to make a positive impact in the world. <br/><br/>

              I love working in a collaborative environment and my eye for design and user-driven approach to development is what excites and inspires me to always be coding.<br/>

          </div>

          <div className="titlePort">Skills</div>
            <div className="techWrapper">
              <div className="card"><img src={HTML} alt="HTML5_logo"/><p>HTML5</p></div>
              <div className="card"><img src={CSS} alt="HTML5_logo"/><p>CSS3</p></div>
              <div className="card"><img src={SASS} alt="HTML5_logo"/><p>SASS</p></div>
              <div className="card"><img src={JS} alt="HTML5_logo"/><p>Javascript</p></div>
              <div className="card"><img src={REACT_LOGO} alt="HTML5_logo"/><p>React JS</p></div>
              <div className="card"><img src={PSQL} alt="HTML5_logo"/><p>Postgres SQL</p></div>
              <div className="card"><img src={ANGULAR} alt="HTML5_logo"/><p>Angular JS</p></div>
              <div className="card"><img src={GULP} alt="HTML5_logo"/><p>Gulp</p></div>
              <div className="card"><img src={GIT} alt="HTML5_logo"/><p>Git</p></div>
              <div className="card"><img src={NODE} alt="HTML5_logo"/><p>NodeJS</p></div>
              <div className="card"><img src={TERMINAL} alt="HTML5_logo"/><p>Terminal</p></div>
              <div className="card"><img src={WP} alt="HTML5_logo"/><p>WordPress</p></div>
            </div> <br/>
          <div className="titlePort">Portfolio</div>
            <div className="portWrapper">
              <div className="cardBek"><a href="http://bek.ellamaearana.com"> <img src={BEK} alt="HTML5_logo"/></a><p>Bek (Shifty) <br/> A web-app that allows workers to get notified realtime of open shifts and claim them, as well as view schedules. Creates a fast and easy way to exchange shifts with other workers through SMS. Built with React, Postgresql, node+express  and integrated Google Calendar, Twilio and OAuth.
</p></div>
               <div className="cardBek"><a href="https://github.com/ellamae0821/consume-more-stuff/tree/development"><img src={CMS} alt="HTML5_logo"/></a><p>Consume More Stuff <br/> A minimal CMS to allow users to list personal items for sale. Built with React, Node, Express, and PostgreSQL.
</p></div>

            </div>


        <div className="technologies">
          <div className="techCards">
            <div className="techPhoto"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
