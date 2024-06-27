import React from "react";

interface TimelineProps {
  activeLocation: string | null;
  handleLocationClick: (location: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ activeLocation, handleLocationClick }) => {
  return (
    <div className="timeline">
      <div className="line"></div>
      
      {/* Punto Toscana */}
      <div className={`point big toscana ${activeLocation === "toscana" ? "active" : ""}`} onClick={() => handleLocationClick("toscana")}>
        <div className={`smallPoint cecina ${activeLocation === "toscana" ? "active" : ""}`}></div>
      </div>
      
      <div className="line"></div>
      
      {/* Punto Milano */}
      <div className={`point big milano ${activeLocation === "milano" ? "active" : ""}`}  onClick={() => handleLocationClick("milano")}>
      </div>
      
      {/* Punto Sales Advisor */}
      <div className={`point small salesAdvisor ${activeLocation === "salesAdvisor" ? "active" : ""}`} onClick={() => handleLocationClick("salesAdvisor")}></div>

       {/* Punto Visual */}
       <div className={`point small visual ${activeLocation === "visual" ? "active" : ""}`} onClick={() => handleLocationClick("visual")}></div>
    </div>
  );
};


export default Timeline;
