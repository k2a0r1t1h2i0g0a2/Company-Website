import React from 'react';
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Blog = () => {
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
        <h1 id="head">
          UNLOCKING BUSINESS SUCCESS: THE POWER OF RIYADVI DIGITAL MARKETING
        </h1>
        <p id="para">
          In today’s fast-paced digital landscape, businesses, regardless of
          their size, have a tremendous opportunity to thrive like never before.
          Welcome to the world of Riyadvi Digital Marketing, where we’re here to
          guide you on a journey towards reaching new horizons, forging lasting
          connections, and boosting your revenue to unprecedented heights.
        </p>
        <h1 id="head">
          "TOP DIGITAL MARKETING TOOLS AND STRATEGIES FOR YOUR BUSINESS"
        </h1>
        <h3>WHATSAPP MARKETING</h3>
        <h3>INSTAGRAM MARKETING</h3>
        <h3>EMAIL MARKETING</h3>
        <h3>FACEBOOK MARKETING</h3>
        <h3>SMS MARKETING</h3>
        <h3>TELEMARKETING</h3>
        <h3>AFFILIATE MARKETING</h3>
      </div>
    );
};

export default Blog;