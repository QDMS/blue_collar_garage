import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import engine from "./../assets/images/Engine.jpg";
import gasket from "./../assets/images/Gasket.jpg";
import engine_replacement from "./../assets/images/Engine_Replacement.jpg";
import transmission_repair from "./../assets/images/transmission_repair.jpg";
import bearings from "./../assets/images/bearings.jpg";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="service" id="services">
      <Container>
        <Row>
          <Col>
            <div className="service-bx">
              <h2>Services</h2>
              <p>
                At Blue Collar Garage, we take pride in offering a wide variety
                of automotive services tailored to meet your needs. Whether your
                vehicle requires routine maintenance such as oil changes, tire
                rotations, and brake inspections, or more extensive repairs like
                engine diagnostics, transmission repairs, or electrical work,
                we've got you covered. Our skilled technicians have the
                expertise to work on all makes and models, from compact cars to
                heavy-duty trucks. Additionally, we specialize in servicing
                classic cars, providing meticulous care to preserve their
                timeless beauty and performance. From minor adjustments to major
                overhauls, we're equipped to handle any automotive challenge
                with precision and efficiency. At Blue Collar Garage, we're
                committed to keeping you safely on the road with a comprehensive
                range of services designed to exceed your expectations.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="service-slider"
              >
                <div className="item">
                  <img src={engine} alt="Image1" />
                  <h5>Engine Repair</h5>
                </div>
                <div className="item">
                  <img src={gasket} alt="Image2" />
                  <h5>Gasket Repair</h5>
                </div>
                <div className="item">
                  <img src={engine_replacement} alt="Image3" />
                  <h5>Engine Replacement</h5>
                </div>
                <div className="item">
                  <img src={transmission_repair} alt="Image4" />
                  <h5>Transmission Repair</h5>
                </div>
                <div className="item">
                  <img src={bearings} alt="Image5" />
                  <h5>Bearings</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img alt="color" className="background-image-left" src={colorSharp}/> */}
    </section>
  );
};
