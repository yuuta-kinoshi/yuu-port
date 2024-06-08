import style from "./Footer.module.css";

import logo from "../assets/logo-pink.png";

import audio1 from "../assets/sounds/kinoshiyuuta01.mp3";
import audio2 from "../assets/sounds/kinoshiyuuta02.mp3";
import audio3 from "../assets/sounds/kinoshiyuuta03.mp3";
import audio4 from "../assets/sounds/kinoshiyuuta04.mp3";
import audio5 from "../assets/sounds/kinoshiyuuta05.mp3";
import audio6 from "../assets/sounds/kinoshiyuuta06.mp3";
import audio7 from "../assets/sounds/kinoshiyuuta07.mp3";
import audio8 from "../assets/sounds/kinoshiyuuta08.mp3";

const Footer = () => {
  const sounds = [
    { src: audio1 },
    { src: audio2 },
    { src: audio3 },
    { src: audio4 },
    { src: audio5 },
    { src: audio6 },
    { src: audio7 },
    { src: audio8 },
  ];

  function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex].src);
    audio.play();
  }

  return (
    <footer className={style.container}>
      <img width="64px" src={logo} alt="" />
      <p style={{textAlign: "center"}}>
        &copy; All rights reserved <br /> Made with <span>love</span> by{" "}
        <a href="/github">yuuta-kinoshi</a> -{" "}
        <span style={{ color: "white", cursor: 'pointer' }} onClick={playRandomSound}>
          Yuuta Kinoshi
        </span>
      </p>
    </footer>
  );
};

export default Footer;
