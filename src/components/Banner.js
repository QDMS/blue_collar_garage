import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "./../assets/images/header-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 2000;

  useEffect(() => {

    const toRotate = ["Where Every Repair Comes with True Grit!"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum]);

  const handleConnectClick = () => {
    // Replace the phone number below with your desired phone number
    window.location.href = "tel:+12299771509";
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To Blue Collar Garage A Licensed And Insured Mechanic Shop</span>
            <h1>
              {``}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Welcome to Blue Collar Garage, where automotive expertise meets a
              commitment to honest service. At Blue Collar Garage, we understand
              the importance of keeping your vehicle running smoothly, whether
              it's your trusty daily driver or a cherished classic car. With a
              team of skilled technicians dedicated to quality workmanship, we
              tackle everything from routine maintenance to complex repairs with
              precision and care. Our customer-centric approach means you can
              trust us to provide transparent diagnostics, fair pricing, and
              dependable service every time you visit. Experience the difference
              at Blue Collar Garage, where we're driven by a passion for cars
              and a dedication to exceeding your expectations.
            </p>
            <button onClick={handleConnectClick}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
