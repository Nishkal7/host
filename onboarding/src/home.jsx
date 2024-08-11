import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is Host App.</h1>
      <br />
      <nav>
        <Link to="/login">Go to Login Page</Link>
      </nav>
    </>
  );
};

export default Home;
