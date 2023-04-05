import React from 'react';
import portrait from '../img/self.png';

const Intro = () => {
  return (
    <>
      <div className="intro-main-container" id="intro">
        <section className="intro-socials">
          <a href="https://twitter.com/" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/duval-bar" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:duvalbarrettwebdev@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/duvalbarrett" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
        <div className="intro-container">
          <div className="intro-txt">
            <section>
              <h5>
                Welcome <span class="h1">👋</span>
              </h5>
              <h1>Hi, I'm Duval</h1>
              <div className="intro-title">
                <hr />
                &nbsp; &nbsp;<p>Full Stack Web Developer 👨🏽‍💻</p>
              </div>
              <p>
                I'm a Fullstack Web developer from New York and i'm very
                passionate and dedicated to my work.
              </p>
              <a href="#contact">
                <button id="connect-btn">
                  Let's Connect <i class="fa-solid fa-circle-arrow-right"></i>
                </button>
              </a>
            </section>
          </div>
          <div className="intro-img">
            <img src={portrait} alt="Duval B" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
