import React from "react";
import { Login } from '../../components/login/Login'
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <h1>Welcome to Views</h1>
        <Login/>
      </div>
      <div className="home__image">
      </div>
    </div>
  );
}

export default Home;
