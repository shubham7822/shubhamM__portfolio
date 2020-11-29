import React from "react";
import MyWork from "../../../Data/MyWork.json";
import Project from "../Project";
import "./Work.css";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

function Work() {
  return (
    <Fade bottom cascade>
      <div className='work'>
        <div className='work-container'>
          <LightSpeed left>
            <h1 className='Work-headline'>My Projects</h1>
          </LightSpeed>
          <div className='single-projects'>
            {MyWork.map((proj) => {
              console.log(proj.img);
              return (
                <Project
                  name={proj.name}
                  discription={proj.discription}
                  builtusing={proj.builtusing}
                  url={proj.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Work;
