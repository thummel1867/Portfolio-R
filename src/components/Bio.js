import React from "react";
import MovingComponent from "react-moving-text";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div className="bio-page">
      <div className="page-header">
        <MovingComponent
          className="headerh2"
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          <Link className="bio-name-link" to="/">Thomas Hummel</Link>
        </MovingComponent>
        <br></br>
        <MovingComponent
          className="headerh2"
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          About Me
        </MovingComponent>
      </div>
      <Container>
        <Row>
          <Col>
            <MovingComponent
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <img
                className="bio-photo"
                src="https://avatars.githubusercontent.com/u/105612788?v=4"
                alt="bio-pic"
              />
            </MovingComponent>
          </Col>
          <Col>
            <MovingComponent
              className="bio-content"
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="bio-div">
                <h3>My name is Thomas!</h3>
                <h5>
                  I'm an IT Support Technician and Full-Stack developer with an interest in
                  environmentalism living in Queens, New York.
                </h5>
                <h5>
                  Here's a short list of what can be found in my coding toolbox:
                </h5>
                <Row>
                  <Col>
                    <ul>
                      <li>HTML5</li>
                      <li>Javascript</li>
                      <li>CSS</li>
                      <li>Git</li>
                      <li>Github</li>
                      <li>Postman</li>
                      <li>Python</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Node</li>
                      <li>Express.js</li>
                      <li>Django</li>
                      <li>SQL</li>
                      <li>PostgreSQL</li>
                      <li>Mongoose</li>
                      <li>MongoDB</li>
                    </ul>
                  </Col>
                </Row>
                <p className="bio-p">
                  My coding philosophy is motivated by the desire to break down
                  complex problems and synthesize them into something
                  that a user can easily understand and enjoy.
                </p>
              </div>
            </MovingComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bio;
