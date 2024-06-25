import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./pages/authPage/AuthPage";
import Sidebar from "./pages/sidebar/Sidebar";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Presentazione</h1>
          <Navbar />
        </header>
        <main>
          
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<AuthPage />} />
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
