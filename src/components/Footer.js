import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/bcgtransparent.png";
import facebook from "../assets/images/facebook.gif";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center">
        <Col sm={6}>
          <img src={logo} alt="Logo" />
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100077754870518">
                <img
                  alt="facebook"
                  src={facebook}
                  style={{ width: "200px", height: "200px" }}
                />
              </a>
            </div>
            <p style={{ fontSize: "larger" }}>
              Created By:{" "}
              <a style={{ color: "#d4af37" }} href="https://qujuan.net/">
                Qujuan Miller
              </a>
              /
              <a
                style={{ color: "#d4af37" }}
                href="https://www.facebook.com/gaming/TismStudioGames"
              >
                TismStudios
              </a>{" "}
              2024
            </p>
          </Col>
        </Col>
        <Col>
          <h1 style={{ fontSize: 80, color: "#32527b" }}>Blue Collar Garage</h1>
          <p style={{ fontSize: "larger" }}>
            Phone:{" "}
            <a style={{ color: "#32527b" }} href="tel:+12299771509">
              (229)977-1509
            </a>
          </p>
          <p style={{ fontSize: "larger" }}>
            Email:{" "}
            <a
              style={{ color: "#32527b" }}
              href="mailto:
daviswalker66@gmail.com"
            >
              daviswalker66@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "larger" }}>
            Address:{" "}
            <a
              style={{ color: "#32527b" }}
              href="https://www.google.com/maps/place/5005+Knights+Ferry+Rd,+Valdosta,+GA+31601-1154,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              5005 Knights Ferry Rd, Valdosta, GA 31601-1154, United States
            </a>
          </p>
        </Col>
      </Row>
    </footer>
  );
};
