import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        <p>Welcome to my website!</p>
        </>
    )
}

export default Home;