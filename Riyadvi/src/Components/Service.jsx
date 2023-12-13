import React from 'react';
import { useNavigate } from "react-router-dom";
import "../style.css";

const Service = () => {
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
                <a onClick={() => navigate("/service")}>Services </a>
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
        <h1 id="head"> RIYADVI SERVICES</h1>
        <h3>WEB DEVELOPMENT</h3>
        <h3>APP DEVELOPMENT</h3>
        <h3>3D DEVELOPMENT</h3>
        <h3>DIGITAL MARKETING</h3>
        <h3>GAMING DEVELOPMENT</h3>
        <h3>BUSINESS INTELLIGENCE</h3>
        <h3>VR AND AR</h3>
        <h3>CYBER SECURITY TESTING</h3>
        <h3>MIXED REALITY</h3>
      </div>
    );
};

export default Service;