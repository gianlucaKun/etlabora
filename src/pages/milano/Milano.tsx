import React from "react";
import "./Milano.css";
import milanoImg from "../../assets/milano.jpg";
import visualImg from "../../assets/visual.jpg";
const Milano: React.FC = () => {
  return (
    <div className="containerMilano">
      <h2 id="milano">Milano</h2>
      <div className="containerIntroMilano">
        <p>
          Milano era l'unica città in Italia in quel periodo che rispecchiava
          ciò che stavo cercando. Ho dunque iniziato a cercare lavoro, appena
          trasferito ovviamente l'esigenza era trovare qualcosa in tempi
          abbastanza stretti di modo da poter pagare le varie spese che avrei
          avuto, cercando un lavoro dinamico che mi permettesse di vivere
          appieno la città.
        </p>
        <img src={milanoImg} alt="Duomo Milano" id="milanoImg" />
      </div>
      <div className="containerSales">
        <h3>Sales Advisor</h3>
        <p>
          Ho iniziato lavorando in Inditex, principalmente nei Flag ship Store
          di Zara e Bershka. <br /> Post covid ho iniziato la mia esperienza in
          H&M Duomo, con un breve step in Diesel che mi ha formato nell' avere
          un approccio più premium a quel mondo. Dopo questa breve esperienza
          sono tornato in H&M per la prospettiva di una crescita aziendale, dopo
          un talent day, pratica aziendale per capire se un dipendente è pronto
          a ricoprire un nuovo ruolo, ho iniziato il mio percorso come visual
          merchandiser.
        </p>
      </div>

      <h3 id="visualM">Visual Merchandiser</h3>
      <div className="containerVisual">
        <img src={visualImg} alt="visual Merchandiser" />
        <p>
          Sono quindi cresciuto di ruolo ed ho iniziato il mio nuovo percorso,
          iniziando la mia formazione nei negozi H&M di Orio ed Arese, finita
          questa sono tornato nel Flag ship Store di Duomo. Nel nuovo ruolo ho
          potuto confrontarmi con un nuove responsabilità, la gestione di
          consegne, del Team del mio reparto, e le esigenze di marketing del
          negozio in cui stavo lavorando, inoltre ho iniziato a documentarmi
          costantemente su quelli che erano i trend del momento per restare al
          passo con i tempi. <br /> Ma la nota negativa di quell'esperienza
          arrivò quando mi misero di fronte la sola opzione di spostarmi di
          città. Scelta che rifiutai dal momento che non era mia intenzione un
          trasferimento in quel momento.
        </p>
      </div>
    </div>
  );
};

export default Milano;
