import React from "react";
import "./Home.css";
import Cecina from "../cecina/Cecina";
import Milano from "../milano/Milano";

const Home: React.FC = () => {

  return (
    <div className="containerBio">
    <Cecina />
    <Milano />
    </div>
  );
};

export default Home;
