import React, { useState } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

      const navigate = useNavigate();

  
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <h1>RIYADVI</h1>
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate("/aboutus")}>About</a>
            </li>
            <li>
              <a onClick={() => navigate("/service")}>Services</a>
            </li>
            <li>
              <a onClick={() => navigate("/blog")}>Blog</a>
            </li>
            <li>
              <a onClick={() => navigate("/contact")}>Contact</a>
            </li>
            <li>
              <button> REQUEST A CALL BACK</button>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h1 id="head"> WE CONNECTING BUSINESS AND TECHNOLOGY</h1>
        <p id="para">
          Our Software Development company enhances customer service by speeding
          up time to value. Utilizing the latest technology can boost
          operational efficiency.
        </p>
        <button id="btn-1">Schedule A Call</button>
        <h1 id="head">
          WHAT MAKES RIYADVI ONE OF THE TOP IT COMPANY IN CHENNAI?
        </h1>
        <p id="para">
          Riyadvi Software Technologies Pvt.Ltd is a well-established one of the
          top IT company in Chennai 2023. As a result, we offer custom software
          solutions to help our clients run their businesses more efficiently
          Mostly, With the use of high-end tools and technologies, we offer
          lucrative custom software development solutions for clients.
        </p>
        <div>
          <li>
            Develop webs, apps, game, cyber security testing, augmented reality
            and virtual reality, mixed reality, digital marketing, and business
            intelligence.
          </li>
          <li>
            Furthermore, all of these services were provided at a very minimal
            cost.
          </li>
          <li>
            Aside from that, we are a software development company and love
            solving business problems.
          </li>{" "}
          <button id="btn-1">Explore More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
