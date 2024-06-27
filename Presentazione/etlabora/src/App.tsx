import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./pages/authPage/AuthPage";
import Sidebar from "./pages/sidebar/Sidebar";
import Sidebartimeline from "./components/sidebarsx/Sidebartimeline";


import "./App.css";
import Cecina from "./pages/cecina/Cecina";
import Milano from "./pages/milano/Milano";
import EtLabora from "./pages/etlabora/EtLabora";
import Intro from "./components/intro/Intro";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <Intro />
          <Navbar />
        </header>
        <main>
          <Sidebartimeline />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<AuthPage />} />
              <Route path="/cecina" element={<Cecina/>} />
              <Route path="/milano" element={<Milano />} />
              <Route path="/etlabora" element={<EtLabora />} />
              {/* Aggiungi altre rotte qui, se necessario */}
            </Routes>
          </div>
          <Sidebar />
        </main>
      </div>
    </Router>
  );
};

export default App;
