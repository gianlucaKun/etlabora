import React from "react";
import "./EtLabora.css";
import fullstackImg from "../../assets/fullstack.png";

const EtLabora: React.FC = () => {
  return (
    <div className="containerAllEtLabora">
      <div className="containerIntroEtlabora">
        <h2 id="etlabora">EtLabora</h2>
      </div>
      <div className="containerEtlabora"></div>
      <h3>Corso</h3>
      <div className="corso">
        <div className="containerDescriptions">
          <p>
            Durante il programma di formazione di Etlabora, ho affrontato vari
            moduli che mi hanno permesso di sviluppare competenze sia nel
            frontend che nel backend. Nonostante le complessità di ciascun
            modulo, sono riuscito a superare le difficoltà grazie alla mia
            autodisciplina e alla costante ricerca di risorse aggiuntive come
            video lezioni e tutorial online, che mi hanno aiutato a consolidare
            le mie conoscenze e a prepararmi adeguatamente per ogni nuova
            sfida.
          </p>
          <p>
            Nei primi moduli, sotto la guida di Shay, ho avuto l'opportunità di
            creare i primi mockup di applicativi ecommerce, concentrandomi
            intensamente sul CSS per realizzare interfacce utente accattivanti e
            funzionali. Successivamente, nel modulo di React, ho approfondito il
            concetto di Single Page Application (SPA), aumentando la complessità
            dei progetti e imparando a gestire lo stato delle applicazioni
            utilizzando strumenti come Redux. Ho anche acquisito esperienza con
            il sistema di routing di React, che mi ha permesso di creare
            applicazioni web dinamiche e performanti.
          </p>
          <p>
            Passando al backend, ho approfondito la logica della costruzione di
            siti web, con particolare attenzione alla gestione e alla
            manipolazione dei database. Durante il modulo di MySQL, ho
            rivestito il ruolo di "team leader" in un progetto di gruppo per lo
            sviluppo del backend di un'applicazione di gestione scolastica. In
            questo contesto, ho avuto l'opportunità di applicare le mie
            competenze in SQL per progettare e ottimizzare le query, nonché di
            coordinare il lavoro del team, assicurandomi che tutte le parti del
            progetto fossero integrate correttamente.
          </p>
          <p>
            Nei moduli successivi, ho lavorato con Java e Java Spring Boot,
            imparando a sviluppare API RESTful e a integrare vari livelli
            dell'applicazione. Ho compreso come collegare il frontend, il
            backend e il database per creare applicazioni complete e
            funzionalmente integrate. Ho approfondito l'uso di JPA (Java
            Persistence API) per la gestione della persistenza dei dati e ho
            imparato a utilizzare strumenti come Postman per testare le API e
            assicurarmi che funzionassero correttamente.
          </p>
          <h3>Stage</h3>
          <p>
            Durante il mio stage presso Object Method, ho messo in pratica le
            competenze acquisite, riprendendo dall'ultimo modulo di Spring Boot
            e costruendo progetti backend di crescente complessità. L'approccio
            era altamente strutturato: mi venivano indicati obiettivi specifici
            e risorse da ricercare, con poche spiegazioni dettagliate, il che mi
            ha costretto a diventare più autonomo e a sviluppare una solida
            capacità di problem-solving. Nonostante l'ambiente lavorativo
            presentasse delle sfide, come la mancanza di supporto costante da
            parte del tutor, sono riuscito a completare tutti i compiti assegnati,
            dedicando i primi mesi e mezzo a ripasso e studio approfondito,
            seguito da esercizi pratici.
          </p>
          <p>
            La ripetitività degli esercizi mi ha spinto a cercare nuove sfide e
            a proporre al mio tutor l'esplorazione di Kafka, una piattaforma di
            streaming di dati distribuita. Dopo aver ricevuto il via libera,
            sono stato inserito in un progetto interno che prevedeva la
            sostituzione delle chiamate HTTP tra microservizi con l'integrazione
            di Kafka per il passaggio dei dati. Questo progetto mi ha permesso
            di comprendere meglio l'architettura dei sistemi distribuiti e le
            tecniche avanzate di gestione del flusso di dati.
          </p>
          <h3>Considerazioni</h3>
          <p>
            Attualmente, non saprei dire con certezza se preferisco lavorare
            con il backend o il frontend, poiché ho affrontato ogni parte del
            corso con lo stesso entusiasmo e curiosità, desideroso di conoscere
            ed imparare il più possibile. Tuttavia, durante lo stage, ho avuto
            modo di lavorare quasi esclusivamente con il backend, il che mi ha
            lasciato con la sensazione di voler approfondire ulteriormente il
            frontend.
          </p>
          <p>
            Questa esperienza complessiva mi ha permesso di consolidare le mie
            competenze nel backend e di sviluppare nuove abilità tecniche e
            personali, affrontando sfide che mi hanno fatto crescere
            professionalmente. Sono grato per l'opportunità e sono entusiasta di
            continuare il mio percorso nel mondo dello sviluppo fullstack,
            sperando di esplorare ulteriormente le potenzialità del frontend in
            futuro.
          </p>
        </div>
        <img src={fullstackImg} alt="fullstackImg" id="fullstackImg" />
      </div>
    </div>
  );
};

export default EtLabora;
