import React from "react";
import "./Project.css";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

function Project({ name, discription, builtusing, url }) {
  return (
    <Fade bottom cascade>
      <div id='project'>
        <center>
          <h1 className='project-headline'>{name}</h1>{" "}
          <div className='project-headline-border-bottom'></div>
        </center>
        <div className='project-containter'>
          <div className='project-discription'>
            <h3>Discription</h3>
            <h3>{discription}</h3>
          </div>
          <div className='project-using'>
            <h3>Built-using</h3>
            <h3>{builtusing}</h3>
          </div>
        </div>
        <div className='live-demo-container'>
          <a href={url} target='_blank' className='live-demo-btn'>
            view live Demo
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Project;
