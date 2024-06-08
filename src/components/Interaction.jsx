import React from "react";
import styled from "styled-components";
import PreLoader from "./PreLoader";

import yuu01 from "../assets/sounds/kinoshiyuuta07.mp3";
import yuu02 from "../assets/sounds/kinoshiyuuta07.mp3";
import introdutionSound from "../assets/sounds/sound-introdution.mp3";

import interactionImage from '../assets/imgs/interaction-image.gif'

const Interaction = () => {
  const [isClicked, setIsClicked] = React.useState(true);

  const audios = [{ ind: yuu01 }, { ind: yuu02 }];
  const random = Math.floor(Math.random() * audios.length);
  const randomAudio = new Audio(audios[random].ind);

  if (isClicked) {
    window.document.body.style.overflowY = "hidden";
  }
  
  function handleClick() {
    setIsClicked(false);
    setTimeout(() => {
      randomAudio.play();
    }, 1700);
    setTimeout(() => {
      introdutionSound.play();
    }, 3000)
  }

  const StyledModal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000; /* Set background color directly */
    display: grid;
    align-items: flex-end;
    justify-content: center;
    z-index: 500;
    position: absolute,
    top: 0;
    left: 0;
    text-align: center;
  `;
  const TextInfo = styled.p`
    font-size: 2.7em;
    font-weight: bold;
    margin-bottom: 4em;
    animation: blink 1s infinite;

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  if (isClicked)
    return (
      <>
        <StyledModal onClick={handleClick}>
          <img style={{ width: '240px', transform: 'translate(350px, 200px)'}} src={interactionImage} alt="anime-girl-walking" />
          <TextInfo>Click anywhere on the screen to continue</TextInfo>
        </StyledModal>
      </>
    );
  else
    return (
      <>
        <PreLoader onClick={handleClick} />
      </>
    );
};

export default Interaction;
