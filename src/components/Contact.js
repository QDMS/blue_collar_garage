import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import axios from "axios";
import { toast } from "react-toastify";

export const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    buttonText: "Send",
  });

  const { firstName, lastName, email, phone, message, buttonText } = values;
  const REACT_APP_API = process.env.REACT_APP_API;

  // event handler
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "...Sending" });
    axios({
      method: "POST",
      url: `${REACT_APP_API}/message`,
      data: { firstName, lastName, email, phone, message },
    }).then((response) => {
      if (response.data.success) toast.success("Thanks for leaving a message.");
      setValues({
        ...values,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        buttonText: "Sent",
      })
    })
    .catch((error) => {
      if (error.response.data.error) toast.error('Failed! Try Again!') 
    })
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange("firstName")}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange("lastName")}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleChange("email")}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handleChange("phone")}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={message}
                    placeholder="Message"
                    onChange={handleChange("message")}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
