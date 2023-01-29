import Particles from "react-tsparticles";
import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import styled, { keyframes } from "styled-components";

function Animation() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <StyledContainer
      particlesLoaded='particlesLoaded'
      init={particlesInit}
      loaded={particlesLoaded}
      id='tsparticles'
      options={{
        fullScreen: {
          enable: false,
          zIndex: 10,
        },
        background: {
          color: {
            value: "transparent",
          },
          size: "contain",
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#503089",
          },
          links: {
            color: "#503089",
            distance: 200,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
            bounce: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

const StyledContainer = styled(Particles)`
  position: relative;
  left: 0px;
  top: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
export default Animation;
