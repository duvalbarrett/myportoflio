import portrait from '../img/self.png';

const About = () => {
  return (
    <div className="about-main-container" id="about">
      <h1>About Me</h1>
      <p>My Introduction</p>
      <div className="about-container">
        <div className="about-img">
          <img src={portrait} alt="Duval Barret" />
        </div>
        <div className="about-txt">
          <p>
            Hello, I'm Duval 👋🏼, I am a Full-Stack Web Developer with a passion
            for growth, development, and innovation. I have numerous experience
            in frontend and backend technologies. I have a knack for technology
            and a passion for pursuing knowledge. I build websites using HTML,
            CSS, JavaScript and ReactJS for the frontend and NodeJS/PostgreSQL
            for the backend of my projects. I am very laid back, but also a
            passionate person who pursues his dreams. I enjoy stepping out of my
            comfort zone and taking on new challenges. I am currently accepting
            project opportunities, clients, or employment.
          </p>
          <a
            href="https://docs.google.com/document/d/1fSMUspcGv0arb_TmPap7DYV7Uh9qXdKe/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              My Resume <i class="fa-solid fa-circle-down"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
