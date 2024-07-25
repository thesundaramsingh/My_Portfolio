import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import P1 from "../../Assets/Projects/P1.png";
import P2 from "../../Assets/Projects/P2.png";
import P3 from "../../Assets/Projects/P3.png";
import P4 from "../../Assets/Projects/P4.png";
import P5 from "../../Assets/Projects/P5.png";
import P6 from "../../Assets/Projects/P6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P3}
              isBlog={false}
              title="Music Recommendation System - Facial Expression"
              description="The system utilizes facial emotion recognition technology to analyze the user's facial expressions in real-time.
              and then identified emotions are then mapped to corresponding musical preferences."
              ghLink="https://github.com/thesundaramsingh/Music-Recommendation"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P5}
              isBlog={false}
              title="DocBuddy"
              description="The DocBuddy - Chat Bot provides guidance and remedies for health related issues based on Ayurveda 
              Principles."
              ghLink=""
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P4}
              isBlog={false}
              title="Student Feedback Management System"
              description="Student Feedback System for college students have been developed which aims to rate and analyse the college faculty’s performance. Students feedbacks can be tempered for wrong reasons in case of paper based feedbacks wherein the SFS will 
              always ensure safety of feedbacks privacy."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P6}
              isBlog={false}
              title="Netflix Clone"
              description="This project is a static clone of the Netflix user interface, built using HTML and CSS. It serves as a visual representation of what a Netflix-like website could look like, 
              and it includes responsive design for various screen sizes."
              ghLink="https://github.com/thesundaramsingh/Netflix_Clone"
              demoLink="https://clone-nflix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P1}
              isBlog={false}
              title="Github Profile Search"
              description="It searches for User Github account and shows insights such as followers,following,repository etc."
              ghLink="https://github.com/thesundaramsingh/Github_Profile_Search"
              demoLink="https://github-pr0file-search.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2}
              isBlog={false}
              title="QR Code Generator"
              description="In this QR Code Generator app, users can enter a text or URL to generate a QR code for it.(It is a QR code generator app, not a QR code scanner)"
              ghLink="https://github.com/thesundaramsingh/QR_code_generator"
              demoLink=" https://qr-code-generat0r.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
