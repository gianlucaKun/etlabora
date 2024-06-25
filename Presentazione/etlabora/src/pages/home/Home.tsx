import React, { useState } from "react";
import "./Home.css";
import CustomCalendar from "../../components/calendar/Calendar";
import cecinaImg from "../../assets/marina-di-Cecina.png"

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <>
      <div>
        <h1 className="title">Benvenuto, nomexxx!</h1>
        <p>Ti racconterò in breve il mio percorso.</p>
      </div>
      <div>
        <h2>Toscana</h2>
        <p>
          Sono nato a{" "}
          <a
            href="https://it.wikipedia.org/wiki/Cecina_(Italia)"
            className="cecina"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Cecina (LI)
          </a>{" "}
          il
          <CustomCalendar />
        </p>
        <img src={cecinaImg}
          alt="cecinaImg"
          className={`cecinaImg ${isHovered ? "enlarged" : ""}`} />
        <p>
          Lì mi sono formato, ho coltivato i miei interessi e ho passato il mio
          tempo tra giornate di mare e la compagnia degli amici, senza
          trascurare gli studi ovviamente. Crescendo, ho però capito che quella
          realtà mi stava stretta; avevo bisogno di vivere in una città più in
          linea con la persona che stavo diventando, che non fosse monotona, e
          circondarmi di persone che avessero la mia stessa mentalità.
        </p>
        <h2>Milano</h2>
        <p>
          Mi sono dunque trasferito a Milano nel 2018, l'unica città in Italia
          che rispecchiava ciò che stavo cercando.
        </p>
      </div>
    </>
  );
};

export default Home;
