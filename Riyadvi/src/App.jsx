import React from "react";
import Home from "./Components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus.jsx";
import Service from "./Components/Service.jsx";
import Blog from "./Components/Blog.jsx";
import Contact from "./Components/Contact.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
};

export default App;
