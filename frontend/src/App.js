import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Donate from "./components/Donate/Donate";
import { Login } from "./components/Login/Login";
import Register from "./components/Login/Register";
import Contact from "./components/Contact/Contact";
import Receiver from "./components/Receiver/Receiver";
import FAQ from "./components/FAQ/FAQ";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate" element={<Donate />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/receive" element={<Receiver />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
