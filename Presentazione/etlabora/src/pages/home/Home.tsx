import React, { useState } from "react";
import "./Home.css";

const Home: React.FC = () => {

  return (
    <>
      <div className="content">
        <h1 className="title">Benvenuto!</h1>
        <p>Ti racconterò in breve il mio percorso.</p>
      </div>
      <div className="journey">
        <div className="details">
        </div>
      </div>
    </>
  );
};

export default Home;
