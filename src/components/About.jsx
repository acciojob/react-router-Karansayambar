import React from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <p>About</p>
        <p>This is a sample React Router program.</p>
        </>
    )
}

export default About;