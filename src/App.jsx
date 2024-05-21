import './App.css';
import './script.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from './images/img.png';
import about from './images/about.png';

import Navbar from './components/Navbar';

function App() {
  return (
    <body>
      <Navbar />

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Skydelta</h1>
          <h3>And I'm a <span className="multiple-text"></span></h3>
          <p className="normal-text"></p>
          <div className="social-media">
            <a href="https://twitter.com/deltabloomm"><i className='bx bxl-twitter'></i></a>
            <a href="https://github.com/Sky-seed0215"><i className='bx bxl-github' ></i></a>
            <a href="#"><i className='bx bxl-linkedin' ></i></a>
          </div>
          <a href="#" className="btn">Download source cord</a>
        </div>

        <div className="home-img">
          <img src={logo} alt="logo" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={about} alt="about" />
        </div>

        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Discord Bot Developer</h3>
          <p className="about-text"></p>
          <a href='#' className="btn">Read More</a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="services-container">
            <div className="services-box">
              <i className='bx bxl-react'></i>
              <h3>Frontend Development</h3>
              <p className="services-text-1"></p>
              <a href="#" className="btn">Read More</a>
            </div>

            <div className="services-box">
              <i className='bx bxl-discord-alt'></i>
              <h3>Discord Bot Development</h3>
              <p className="services-text-2"></p>
              <a href="#" className="btn">Read More</a>
            </div>

            <div className="services-box">
              <i className='bx bxs-data'></i>
              <h3>Backend Development</h3>
              <p className="services-text-3"></p>
              <a href="#" className="btn">Read More</a>
            </div>
          </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="https://images-ext-2.discordapp.net/external/MBuT3Np4p3j-WFU6YdR0y4xpd3Unf_E-gL8-SM0sWdU/https/opengraph.githubassets.com/a792db5e10bfe3a60559ad52cd0ccf4396e525a4c270dd106f5dd2cb22f26084/Sky-seed0215/repository-tracker?width=1800&height=900" alt="port1" />
            <div className="portfolio-layer">
              <h4>Github Repository Tracker</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='https://github.com/Sky-seed0215/repository-tracker'><i className='bx bxl-github'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="https://images-ext-2.discordapp.net/external/MBuT3Np4p3j-WFU6YdR0y4xpd3Unf_E-gL8-SM0sWdU/https/opengraph.githubassets.com/a792db5e10bfe3a60559ad52cd0ccf4396e525a4c270dd106f5dd2cb22f26084/Sky-seed0215/repository-tracker?width=1800&height=900" alt="port1" />
            <div className="portfolio-layer">
              <h4>Github Repository Tracker</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='https://github.com/Sky-seed0215/repository-tracker'><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action='#' className="form-base">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder='Email Address' />
          </div>
          <div className="input-box">
            <input type="tel" placeholder='Mobile Number' />
            <input type="text" placeholder='Email Subject' />
          </div>
          <textarea name='' id='' cols="30" rows="10" placeholder='Your Message'></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* footer */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by skydelta | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <AnchorLink className="up-btn" href="#home"><i className="bx bx-up-arrow-alt"></i></AnchorLink>
        </div>
      </footer>
    </body>
  );
}

export default App;
