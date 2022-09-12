import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Move,
  Sticky,
  FadeIn,
  ZoomInScrollOut,
  Zoom,
  batch,
  Fade,
  MoveOut,
  ZoomIn,
  StickyIn,
} from "react-scroll-motion";
import logo from "../Photos/feathers.png";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());

  return (
    <div className="page-header">
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
        <Link className="projects-name-link" to="/">Thomas Hummel</Link>
      </MovingComponent>

      <br></br>

      <ScrollContainer className="scroll-container">
        <MovingComponent
          // className="bio-content"
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          <ScrollPage page={0}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
              <h2 className="animate">Feathers</h2>
              <div className="feathers-div">
                <img className="projects-photo" src={logo} alt="feathers" />
                <div className="projects-content">
                  <p className="projects-p">
                    This app allows for birdwatchers to discover information
                    about birds, track birds they have seen and are searching
                    for, and add new birds to the database.
                    <br></br>
                    <br></br>
                    It is a full-stack Django application.
                  </p>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </MovingComponent>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h2 className="animate">I am a Martian</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h2 className="animate">Fade Up, Dude!</h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Projects;
