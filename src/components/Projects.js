import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./../assets/images/projImg1.jpg";
import projImg2 from "./../assets/images/projImg2.jpg";
import projImg3 from "./../assets/images/projImg3.jpg";
import projImg4 from "./../assets/images/projImg4.jpg";
import projImg5 from "./../assets/images/projImg5.jpg";
import projImg6 from "./../assets/images/projImg6.jpg";
import { ProjectVideoCard } from "./ProjectVideoCard"; // Import the ProjectVideoCard component
import colorSharp from "./../assets/images/bcg.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "New Portable Lift Install",
      description:
        "Installing a new portable lift to start using on my repairs.",
      imgUrl: projImg1,
    },
    {
      title: "New Converter",
      description: "2019 Ford Edge got a new converter",
      imgUrl: projImg2,
    },
    {
      title: "AC Repair",
      description: "AC leak repair",
      imgUrl: projImg3,
    },
    {
      title: "DPF System",
      description: "Dpf system repair",
      imgUrl: projImg4,
    },
    {
      title: "Seals & Gaskets",
      description:
        "Rear main seal, oil pan gasket and timing cover gasket and crank seal",
      imgUrl: projImg5,
    },
    {
      title: "We Do It All",
      description:
        "Brake job, tune up, starter, ac recharge, valve cover gaskets and a battery",
      imgUrl: projImg6,
    },
  ];

  const projectsVideos = [
    {
      vidUrl:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100077754870518%2Fvideos%2F459278839997033%2F&show_text=false&width=267&t=0",
    },
    {
      vidUrl:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100077754870518%2Fvideos%2F265863196596132%2F&show_text=false&width=267&t=0",
    },
    {
      vidUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100077754870518%2Fvideos%2F1188195338814125%2F&show_text=false&width=267&t=0",
    },
    {
      vidUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100077754870518%2Fvideos%2F1574093140070468%2F&show_text=false&width=267&t=0",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              At Blue Collar Garage, we undertake a comprehensive range of
              automotive projects with professionalism and expertise. From
              routine maintenance tasks like oil changes, tire rotations, and
              brake inspections to complex repairs such as engine diagnostics,
              transmission overhauls, and electrical system troubleshooting, our
              team approaches each project with meticulous attention to detail
              and a commitment to excellence. With a wealth of experience
              working on vehicles of all makes and models, including compact
              cars and heavy-duty trucks, we deliver tailored solutions that
              meet the unique needs of each customer. Additionally, our
              specialization in servicing classic cars underscores our
              dedication to preserving their timeless allure and performance.
              Whether it's minor adjustments or major restorations, our skilled
              technicians possess the knowledge and resources to handle every
              automotive challenge efficiently and effectively. At Blue Collar
              Garage, we strive to exceed expectations and ensure the
              satisfaction of every client through our unwavering dedication to
              quality craftsmanship and superior service.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Projects Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={6} key={index}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsVideos.map((project, index) => (
                      <Col md={6} key={index}>
                        <ProjectVideoCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">More Projects Coming Soon</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img alt="color" className="background-image-right" src={colorSharp}/> */}
    </section>
  );
};
