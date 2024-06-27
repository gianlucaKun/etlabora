import React from 'react'
import CustomCalendar from '../../components/calendar/Calendar'
import cecinaImg from '../../assets/marina-di-Cecina.png'
import "./Cecina.css"

const Cecina:React.FC = () => {
  return (
    <div className='containerCecina'>
    <h2 id="cecina">Toscana</h2>
    <CustomCalendar />
    <p className='introCecina'>
      Sono nato a{" "}
      <a
        href="https://it.wikipedia.org/wiki/Cecina_(Italia)"
        className="cecina"
      >
        Cecina (LI)
      </a>{" "}
      il :
    </p>
    <img
      src={cecinaImg}
      alt="cecinaImg"
      className="locationImg"
    />
    <p className='descriptionCecina'>
      Qui mi sono formato, ho coltivato i miei interessi e ho passato il mio
      tempo tra giornate di mare e la compagnia degli amici, senza
      trascurare gli studi ovviamente. <br/> Crescendo, ho però capito che quella
      realtà mi stava stretta, avevo bisogno di vivere in una città più in
      linea con la persona che stavo diventando, che non fosse monotona, e di 
      circondarmi di persone che avessero la mia stessa mentalità. <br/>
      Mi sono dunque trasferito a Milano nel 2018. 
    </p>
  </div>
  )
}

export default Cecina