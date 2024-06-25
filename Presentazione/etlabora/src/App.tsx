import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./pages/authPage/AuthPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Presentazione</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<AuthPage />} />
            {/* Aggiungi altre rotte qui, se necessario */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
