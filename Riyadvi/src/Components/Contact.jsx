import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { GeoAltFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";



const Contact = () => {
const [formData, setFormData] = useState({
  username: "",
  email: "",
  phone: "",
  time: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("", formData);
    alert("Message sent successfully!");
    setFormData({
      username: "",
      email: "",
      phone: "",
      time: "",
      message: "",
    });
  } catch (error) {
    // console.error("Error sending message:", error);
    alert("Error sending message. Please try again later.");
  }
};

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
        <h1> HAVE A QUESTION, CONTACT US!</h1>
        <p style={{ color: "white", fontWeight: "bold" }}>
          Let’s Start by getting to know you better{" "}
        </p>
        <div className="address">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <TelephoneFill color="white" size={30}></TelephoneFill>{" "}
              </Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>
                (+91) 90808 22034
              </Card.Text>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <GeoAltFill color="white" size={30} />
              </Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>
                126, 213, Ramakrishna Mutt Road, Alamelu Manga Puram,
                Sankarapuram, Mylapore, Chennai-600004.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <EnvelopeFill color="white" size={30} />
              </Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>
                info@riyadvisoftwaretechnologies.com
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}> User Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              aria-label="Large"
              style={{ width: "100%", height: "30px" }}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}> Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              aria-label="Large"
              style={{ width: "100%", height: "30px" }}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}> Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter PhoneNumber"
              aria-label="Large"
              style={{ width: "100%", height: "30px" }}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}>
              {" "}
              Time to Contact:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter time"
              aria-label="Large"
              style={{ width: "100%", height: "30px" }}
              value={formData.time}
              onChange={handleChange}
            />
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Label style={{ color: "white" }}> Message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px", width: "100%" }}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <Button type="submit" id="submit" variant="primary">
            Submit Form
          </Button>{" "}
        </Form>
      </div>
    );
};

export default Contact;