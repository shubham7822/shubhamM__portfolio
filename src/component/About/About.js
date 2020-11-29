import React from "react";
import "./About.css";
import about from "../../Data/AboutData.json";
import hello from "../assets/hello.jpg";
import Skils from "../../Data/Skills.json";
import ReactFloaterJs from "react-floaterjs";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import { FaSearchLocation } from "react-icons/fa";

function About() {
  return (
    <Fade Bottom>
      <div className='about'>
        <div className='about-container'>
          {about.map((item) => {
            return (
              <div className='about-inside'>
                <div>
                  <h2 className='about-headline'>{item.Name}</h2>
                  <p className='about-para'>{item.info}</p>
                  <div className='button-element'>
                    <a target='_blank' href={item.link}>
                      <button className='about-btn btn-slide'>
                        Send a mail
                      </button>
                    </a>
                    <div className='about-my-location'>
                      <FaSearchLocation className='my-location-icon' />
                      <h2 className='location-headline'>Wardha,Maharashtra</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <img className='about-image' src={hello} />
                </div>
              </div>
            );
          })}

          <h2 className='about-my-skills'>My skills</h2>
          <div className='about-skills'>
            <Roll bottom>
              {Skils.map((skill) => {
                return (
                  <ReactFloaterJs>
                    <img className='skillImages' src={skill.img} />
                  </ReactFloaterJs>
                );
              })}
            </Roll>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
