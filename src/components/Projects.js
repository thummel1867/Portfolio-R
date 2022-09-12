import React from "react";
import { ScrollContainer, ScrollPage, Animator, Move, Sticky, FadeIn, ZoomInScrollOut, Zoom, batch, Fade, MoveOut, ZoomIn, StickyIn } from "react-scroll-motion";
import logo from '../Photos/feathers.png'
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";

const Projects = () => {

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
const FadeUp = batch(Fade(), Sticky(), Move())

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
          <Link className="bio-name-link" to="/">Thomas Hummel</Link>
        </MovingComponent>
        <br></br>
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
          Projects
        </MovingComponent>

      <ScrollContainer className="scroll-container">
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
          <ScrollPage page={0}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                <h2 className="animate">Feathers</h2>
                <img className="projects-photo" src= {logo} alt="feathers"/>
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
                <h2 className="animate" >Fade Up, Dude!</h2>
            </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Projects;
