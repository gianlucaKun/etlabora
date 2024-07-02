import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import CreatePage from "./pages/create/CreatePage";
import './App.css'
import EditPage from "./pages/edit/EditPage";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </main>
      {/* <footer>
        <div>Sono il footer</div>
      </footer> */}
    </>
  );
}

export default App;
