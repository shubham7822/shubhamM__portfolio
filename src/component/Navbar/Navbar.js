import React from "react";
import "./Navbar.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { useStateValue } from "../../StateProvider";

function Navbar() {
  const [toggle, dispatch] = useStateValue();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleHandler = () => {
    dispatch({
      type: "MODE-CHANGE",
      item: !toggle,
    });
  };
  return (
    <div className='home'>
      <div id='navbar-wrapper'>
        <input
          type='checkbox'
          onClick={toggleHandler}
          className='checkbox'
          id='checked'
        />
        <label className='label__checkbox' htmlFor='checked'>
          <FaMoon className='moon' />
          <FaSun className='sun' />
          <div className='ball'></div>
        </label>

        <div className='nav'>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
