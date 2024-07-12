import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <p>Welcome to main page</p>
        <Link to={"/about"}>About</Link>
        {/* <a href="/about">About</a> */}
        </>
    )
}

export default Home;