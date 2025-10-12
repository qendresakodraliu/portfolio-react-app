import React from "react";
import "./HomeBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

function HomeBanner() {
  return (
    <div
      className="w-100 home"
      id="home"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/background.jpg"
        })`,
      }}
    >
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row pt-5 d-flex justify-content-center align-items-center  mt-5">
          <div className=" text-light homeTextPart">
            <div className="w-100 ">
              <h2 className="welcome-text">WELCOME !</h2> <br />
              <h1 className="mt-30" id="animation-text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: ["HI I AM QENDRESA", "I AM WEB DEVELOPER"],
                  }}
                />
              </h1>
              <br />
              <p className="pt-3 fs-3">
                I am passionate and extremely motivated new front-end developer.
                <br />
                Working with latest technologies like React JS
              </p>
              <div className="icons-content">
                <div className="icons pt-4">
                  <a href="https://www.facebook.com/qendresa.kodraliu/">
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                  </a>
                  <a href="https://github.com/qendresakodraliu/">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/qendresa-kodraliu-19791b256/">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
