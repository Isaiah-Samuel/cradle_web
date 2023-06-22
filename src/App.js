import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/Pages/About";
import Admission from "../src/Pages/Admission";
import HomePage from "../src/Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import Schools from "../src/Pages/Schools";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/schools" element={<Schools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
