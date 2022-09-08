import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    
      <nav class="navbar fixed-bottom">
        <ul class="page-nav">
          <Row>
            
              <li id="bio-nav2">
                <a class="nav-link" href="#">
                  BIO
                </a>
              </li>
            
              <li id="projects2">
                <a class="nav-link" href="#">
                  PROJECTS
                </a>
              </li>
            
              <li class="github">
                <a class="nav-link" href="https://github.com/thummel1867">
                  GITHUB
                </a>
              </li>
            
              <li class="linkedin">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/thomas-hummel-776980189/"
                >
                  LINKEDIN
                </a>
              </li>
          </Row>
        </ul>
      </nav>
  );
};

export default NavigationBar;
