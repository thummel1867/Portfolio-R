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
import logo9 from "../Photos/tetris1.png";
import logo10 from "../Photos/tetris2.png";
import logo11 from "../Photos/tetris3.png";


const ProjectSection = ({ title, images, description, link, additionalLink}) => (
  <div>
    <h4 className="headerh2">{title}</h4>
    <br></br>
    <Carousel className="carousel" fade>
      {images.map((image, index) => (
        <Carousel.Item className="project-img-div" key={index}>
          <img className="d-block" src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
    <p className="projects-p">
      {description}
      <br></br>
      <br></br>
      {additionalLink && (
        <>
          {additionalLink.text} <a className="here" href={additionalLink.url} target="_blank" rel="noopener noreferrer">here</a>.
          <br></br>
          <br></br>
        </>
      )}
      Check it out <a className="here" href={link} target="_blank" rel="noopener noreferrer">here</a>.
      <br></br>
      <br></br>
    </p>
  </div>
);

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
        <ProjectSection
          title="Feathers"
          images={[
            { src: logo, alt: "First slide" },
            { src: logo2, alt: "Second slide" },
            { src: logo3, alt: "Third slide" },
            { src: logo4, alt: "Fourth slide" },
          ]}
          description="This app allows for birdwatchers to discover information about birds, track birds they have seen and are searching for, and add new birds to the database. Feathers is a full-stack Django application."
          link="https://the-birds-application-1543f8cc41d8.herokuapp.com/"
        />
        <ProjectSection
          title="Emissions Electric"
          images={[
            { src: logo5, alt: "First slide" },
            { src: logo6, alt: "Second slide" },
            { src: logo7, alt: "Third slide" },
            { src: logo8, alt: "Fourth slide" },
          ]}
          description="This website allows users to compare the carbon emissions associated with different forms of electricity generation within a variety of countries. Due to the unevenness between the global north and south both in terms of the availability of data, and more importantly, the level of industrial development, most of the countries listed on the site are countries from the global north. Emissions Electric is built with a React front-end."
          additionalLink={{
            text: "I built the backend with express.js and that can be found",
            url: "https://github.com/thummel1867/emissions-backend"
          }}
          link="https://emissionselectric-5e893acb5ca9.herokuapp.com/"
        />
        <ProjectSection
          title="React Tetris"
          images={[
            { src: logo9, alt: "First slide" },
            { src: logo10, alt: "Second slide" },
            { src: logo11, alt: "Third slide" },
          ]}
          description="A spaced-themed Tetris game built with React. The app has optional music and full functionality on desktop."
          link="https://react-tetris-3cc26f33b784.herokuapp.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
