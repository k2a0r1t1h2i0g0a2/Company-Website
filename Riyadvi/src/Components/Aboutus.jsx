import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {

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
          <h1 id="head">ABOUT RIYADVI</h1>
          <p id="para">
            Founded in 2021. About Riyadvi Software Technologies Pvt.Ltd is
            located in Chennai City of India. Specifically, We are a bunch of
            folks who believe in the idea of evocative storytelling. And also,
            Our team uses the visual medium to create lasting impressions. With
            no detail too small, no challenge too big and we truly believe in
            the marriage of production and design.
          </p>
          <p id="para">
            Moreover, Riyadvi specialized in App Development, Web Development,
            Game Development, VR/AR, Mixed Reality, 3D-Development, Digital
            Marketing, and Business Intelligence. In addition, Quality and
            Innovation are at the heart of What we do. Moreover, we look forward
            to working with you and proving our skills to the client’s
            satisfaction.
          </p>
          <h1 id="head"> OUR TEAM</h1>
          <p id="para">
            About Riyadvi team is a bunch of unconventional thinkers who help
            you create out-of-the-box ideas for the Epic outcomes that your
            business requires.
          </p>
          <p id="para">
            In addition, We have a sincere and dedicated team of highly skilled
            and creative people working endlessly with a passionate aspiration
            to change the face of the global media and entertainment industry.
          </p>
        </section>
      </div>
    );
};

export default Aboutus;
