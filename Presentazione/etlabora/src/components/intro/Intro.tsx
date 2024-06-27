import React from "react";
import "./Intro.css";
import Sidebar from "../../pages/sidebar/Sidebar";
import profileImg from "../../assets/india-pozzo.jpg";

const Intro: React.FC = () => {
  return (
    <header>
      <div className="containerIntro">
        <div className="background"></div>
        <h1>
          GIANLUCA <br />
          ANDREONI
        </h1>
      </div>
      <div className="containerBiography">
        <h4>Biography</h4>
        <p>
          Sono nato a Cecina (LI) il 18 dicembre 1995, dove ho trascorso la mia
          infanzia e adolescenza, tra il mare e gli studi. Nel 2018 mi sono
          trasferito a Milano, in cerca di nuove opportunità lavorative e di un
          ambiente più dinamico. Ho lavorato come Sales Advisor per vari marchi,
          tra cui Zara, Bershka, H&M e Diesel, fino a diventare Visual
          Merchandiser. Attualmente, sto completando un corso di formazione in
          Fullstack Development presso Etlabora, dove ho acquisito competenze
          sia nel frontend che nel backend, e ho svolto uno stage presso Object
          Method, lavorando su progetti complessi e integrando Kafka per la
          gestione dei dati.
        </p>
      </div>
      <div className="containerImg">
        <img src={profileImg} alt="io in india" className="profileImg" />
      </div>
      <Sidebar />
    </header>
  );
};

export default Intro;
