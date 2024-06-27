import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AuthPage from "./pages/authPage/AuthPage";
import Sidebartimeline from "./components/sidebarsx/Sidebartimeline";


import "./App.css";
import EtLabora from "./pages/etlabora/EtLabora";
import Intro from "./components/intro/Intro";

const App: React.FC = () => {
  return (
    <Router>
      <div>
          <Intro />
          {/* <Navbar /> */}
        <main>
          <Sidebartimeline />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/submit" element={<AuthPage />} />
              <Route path="/" element={<EtLabora />} />
              {/* Aggiungi altre rotte qui, se necessario */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
