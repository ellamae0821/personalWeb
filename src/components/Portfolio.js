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
          <div className="highlights">WHO? </div>
          I'm <div className="fullName">Ella Mae Arana</div>, a web developer from Hawaii, who loves to build creative and useful web-apps. <div className="highlights">WHY? </div>One day, I woke up & wanted to build (modern) tools to make the world a better place, so, I taught myself how to code aaand bruh, it was <a href="http://www.devleague.com"><em>intense</em></a> but nothing is more fulfilling after seeing every tool I have created and knowing its impact on someone or in a society. <br/>
            <div className="highlights">OK? </div>While learing to code, I believe in the importance of stability with solid foundation and sprinkle it with best practices. Also, yes, I handcrafted this single page website using React JS.  <br/> <br/> TLDR; I can get the job
            done , but first, I need a job.
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
            <div className="techWrapper">
              <a href="http://bek.ellamaearana.com"> <div className="cardBek"><img src={BEK} alt="HTML5_logo"/><p>Bek (Shifty)</p></div></a>
              <a href="http://bek.ellamaearana.com"> <div className="cardBek"><img src={BEK} alt="HTML5_logo"/><p>Bek (Shifty)</p></div></a>
              <a href="http://bek.ellamaearana.com"> <div className="cardBek"><img src={BEK} alt="HTML5_logo"/><p>Bek (Shifty)</p></div></a>
            </div>
          <div className="titlePort">When I'm not coding:</div>

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
