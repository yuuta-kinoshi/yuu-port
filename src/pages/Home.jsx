import React from "react";

import programmer from "../assets/imgs/close-up-programmer.jpg";
import illustration from "../assets/imgs/illustration.png";
import { Typewriter, Cursor } from "react-simple-typewriter";

import "./Home.css";
import Cards from "../components/Cards";
import Button from "../components/Button";
import Carolsel from "../components/Carolsel";
import Embedge from "../components/Embedge";
import { IoLogoJavascript } from "react-icons/io";
import { FaBrain, FaCss3, FaHtml5, FaLightbulb, FaNodeJs, FaPeopleGroup, FaReact, FaSass } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { RiSpeakFill } from "react-icons/ri";
import FormSubmit from "../sections/FormSubmit";

const Home = () => {
  return (
    <>
      <main className="aboutMe">
        <div className="container wrapper">
          <section className="top">
            <div className="introduction">
              <h1>Welcome!</h1>
              <h2>
                <Typewriter
                  words={["Developer", "UI/UX Designer", "Freelancer"]}
                  loop={true}
                  typeSpeed={120}
                  deleteSpeed={50}
                />
                <Cursor cursorStyle="<" />
              </h2>
            </div>
            <div className="developer">
              <p className="lineText">The ideal developer for your project</p>
              <div className="blocks">
                <div className="block1">
                  <strong>The ideal project for you</strong>
                  <p>
                    Whatever your type of business or market segment, I have the
                    ideal solution.
                  </p>
                  <Button url="#starting" text="See more" />
                </div>
                <div className="block2">
                  <Cards
                    imgUrl="https://leonardomagalhaes.com/wp-content/uploads/2022/04/criacao-de-sites.jpg"
                    title="Digital Presence"
                    descriptionCard="Let your prospects and customers discover and explore your business."
                  />
                </div>
                <div className="block3">
                  <Cards
                    imgUrl="https://leonardomagalhaes.com/wp-content/uploads/2022/04/ecom.jpg"
                    title="E-Commerce"
                    descriptionCard="Robust and flexible, have your own online store."
                  />
                </div>
                <div className="block4">
                  <Cards
                    imgUrl="https://leonardomagalhaes.com/wp-content/uploads/2022/04/mkt-digita.jpg"
                    title="Cloud Hosting"
                    descriptionCard="The power of the Cloud, more easily than traditional hosting."
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="me" id="starting">
              <h2>Yuuta Kinoshi</h2>
              <p>
                Web developer, React programmer. I value building dynamic and
                modern websites, focusing on usability and user experience.
              </p>
              <div className="imgBunner">
                <img
                  src={programmer}
                  alt="close up image of programmer working at his desk in office"
                />
                <div className="experience">
                  <p>
                    <strong>1 +</strong> <span>Year of experience</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="lineCenter"></div>
            <div className="moreAboutMe">
              <img src={illustration} alt="programming illustration" />
              <div className="hardSkills" >
                <h3>Hard Skills</h3>
                <div className="embedges">
                  <Embedge
                    icon={<FaHtml5 />}
                    technology="HTML5"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<FaCss3 />}
                    technology="CSS3"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<FaSass />}
                    technology="SASS"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<IoLogoJavascript />}
                    technology="Javascript"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<FaNodeJs />}
                    technology="NodeJs"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<FaReact />}
                    technology="React"
                    bgColor="var(--dark-pink-theme)"
                  />
                  <Embedge
                    icon={<SiStyledcomponents />}
                    technology="Styled Components"
                    bgColor="var(--dark-pink-theme)"
                  />

                </div>
              </div>
              <div className="softSkills">
                <h3>Soft Skills</h3>
                <div className="embedges" style={{ marginBottom: '53px' }}>
                  <Embedge
                    icon={<FaBrain />}
                    technology="Self-taught"
                    bgColor="var(--pink-theme)"
                  />
                  <Embedge
                    icon={<FaPeopleGroup />}
                    technology="Group work"
                    bgColor="var(--pink-theme)"
                  />
                  <Embedge
                    icon={<RiSpeakFill />}
                    technology="Communication"
                    bgColor="var(--pink-theme)"
                  />
                  <Embedge
                    icon={<FaLightbulb />}
                    technology="Creativity "
                    bgColor="var(--pink-theme)"
                  />
                </div>
                <Button url='/aboutme' text='Show more' />
              </div>
            </div>
          </section>
          <section>
            <Carolsel title="Certificates" />
          </section>
          <section id="quots" className="submitFormContainer">
            <div className="submitForm">
              <div>
                <h3>Innovative ideas to <span>skyrocket your online business</span>: Discover the top strategies to attract more customers and boost sales.</h3>
              </div>
              <FormSubmit />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
