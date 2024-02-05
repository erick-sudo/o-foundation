import {} from "react";
import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { About } from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
