import React from "react";
import "./Banner.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Typical from "react-typical";
import { useStateValue } from "../../StateProvider";
import LightSpeed from "react-reveal/LightSpeed";

const Banner = React.memo(() => {
  const [toggle] = useStateValue();

  return (
    <div className='banner' style={{ background: toggle && "white" }}>
      <LightSpeed left cascade>
        <div className='banner-text'>
          <h1 className='banner-headline' style={{ color: toggle && "black" }}>
            I Am{" "}
            <span className='banner-span' style={{ color: toggle && "yellow" }}>
              Shubham
            </span>
          </h1>
          <h2 className='banner-headline2' style={{ color: toggle && "black" }}>
            I Am a
          </h2>
          <Typical
            className={toggle ? "banner-whoIamblack" : "banner-whoAmI"}
            steps={["Coder", 1000, "Front End Developer", 1000]}
            loop={2}
            wrapper='h2'
          />
          <div className='Icons'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/shubham7822'
            >
              <FaGithub
                className='mediaIcon '
                style={{ color: toggle && "black" }}
              />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/shubham-mansute-31761b187/'
            >
              <FaLinkedinIn
                className='mediaIcon '
                style={{ color: toggle && "black" }}
              />
            </a>
          </div>
        </div>
      </LightSpeed>
    </div>
  );
});

export default Banner;
