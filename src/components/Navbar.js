import React from "react";
// import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    
      <nav class="navbar fixed-bottom">
        <ul class="page-nav">
          
              <li id="bio-nav2">
                <Link className="nav-link" to="/bio">
                  BIO
                </Link>
              </li>
            
              <li id="projects2">
                <Link className="nav-link" to="/projects">
                  PROJECTS
                </Link>
              </li>
            
              <li class="github">
                <a className="nav-link" href="https://github.com/thummel1867">
                  GITHUB
                </a>
              </li>
            
              <li className="linkedin">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/thomas-hummel-776980189/"
                >
                  LINKEDIN
                </a>
              </li>
        </ul>
      </nav>
  );
};

export default NavigationBar;
