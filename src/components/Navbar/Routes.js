import React from "react";
import { Link } from "react-scroll";

function Routes(props) {
  return (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="navs"
        activeClass="active"
        spy={true}
        onSetActive={(to) => console.log('Active section:', to)}
      >
      Home
      </Link>
      <Link
        to="education"
        smooth={true}
        duration={500}
        className="navs"
        activeClass="active"
        spy={true}
      >
        Education
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="navs"
        activeClass="active"
        spy={true}
      >
        Projects
      </Link>
      <Link
        to="getInTouch"
        smooth={true}
        duration={500}
        className="navs"
        activeClass="active"
        spy={true}
      >
        Get In Touch
      </Link>
    </>
  );
}
export default Routes;