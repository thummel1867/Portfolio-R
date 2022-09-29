import React from "react";
import logo from "../Photos/feathers1.png";
import logo2 from "../Photos/feathers2.png";
import logo3 from "../Photos/feathers3.png";
import logo4 from "../Photos/feathers4.png";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import logo5 from "../Photos/ee1.png";
import logo6 from "../Photos/ee4.png";
import logo7 from "../Photos/ee2.png";
import logo8 from "../Photos/ee3.png";
import logo9 from "../Photos/hikr1.png";
import logo10 from "../Photos/hikr2.png";
import logo11 from "../Photos/hikr3.png";
import logo12 from "../Photos/hikr4.png";

const Projects = () => {
  return (
    <div className="bio-page">
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
        <Link className="projects-name-link" to="/">
          Thomas Hummel
        </Link>
      </MovingComponent>
      <br></br>
      <div className="projects-content">
        <h4 className="headerh2">Feathers</h4>
        <Carousel className="carousel" fade>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
        <div>
          <p className="projects-p">
            This app allows for birdwatchers to discover information about
            birds, track birds they have seen and are searching for, and add new
            birds to the database.
            <br></br>
            <br></br>
            Feathers is a full-stack Django application.
            <br></br>
            <br></br>
            Check it out <a className = "here" href="https://th-bird-app.herokuapp.com/">here</a>.
            <br></br>
          <br></br>
          </p>
        </div>
        <h4 className="headerh2">Hikr!</h4>
        <Carousel className="carousel" fade>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo9} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo10} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo11} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo12} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
        <div>
          <p className="projects-p">
            Hikr is an application which allows users to connect with their
            local enviernment by providing a platform to locate, add, and save
            hikes in their area.
            <br></br>
            <br></br>
            Hikr is built with a React front-end and an Express.js back-end.
            <br></br>
            <br></br>
            Check it out <a className = "here" href="https://chic-tiramisu-4c79ca.netlify.app/">here</a>.
          </p>
          <h4 className="headerh2">Emissions Electric</h4>
        <Carousel className="carousel" fade>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo6} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="project-img-div">
            <img className="d-block" src={logo8} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>

        <p className="projects-p">
          This website allows users to compare the carbon emissions associated
          with different forms of electricity generation within a variety of
          countries. Due to the uneveness between the global north and south
          both in terms of the availability of data, and more importantly, the
          level of industrial development, most of the countries listed on the
          site are countries from the global north.
          <br></br>
          <br></br>
          Emissions Electric is built with a React front-end in conjunction with data from a third-party API called <a className = "here" href="https://www.climatiq.io/">"Climatiq"</a>. The website is currently in the process of being updated, personalized and expanded with a personally created Express.js back-end. 
          <br></br>
          <br></br>
          Check it out <a className = "here" href="https://emissionselectric.com/">here</a>.
          <br></br>
          <br></br>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
