import React from "react";
import MovingComponent from 'react-moving-text'

const Home = () => {
    
  return (
    <div className="intro-page">
      <MovingComponent
        className="intro-h1"
        type="fadeInFromTop"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="1"
        fillMode="none"
      >
        Thomas Hummel
      </MovingComponent>
    </div>
  );
};

export default Home;
