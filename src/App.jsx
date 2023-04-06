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

      <section class="home" id="home">
        <div class="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Skydelta</h1>
          <h3>And I'm a <span class="multiple-text"></span></h3>
          <p class="normal-text"></p>
          <div class="social-media">
            <a href="https://twitter.com/deltabloomm"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/Sky-seed0215"><i class='bx bxl-github' ></i></a>
            <a href="#"><i class='bx bxl-linkedin' ></i></a>
          </div>
          <a href="#" class="btn">Download source cord</a>
        </div>

        <div class="home-img">
          <img src={logo} alt="logo" />
        </div>
      </section>

      <section class="about" id="about">
        <div class="about-img">
          <img src={about} alt="about" />
        </div>

        <div class="about-content">
          <h2 class="heading">About <span>Me</span></h2>
          <h3>Discord Bot Developer</h3>
          <p class="about-text"></p>
          <a href='#' class="btn">Read More</a>
        </div>
      </section>

      <section class="services" id="services">
        <h2 class="heading">My <span>Skills</span></h2>

        <div class="services-container">
            <div class="services-box">
              <i class='bx bxl-react'></i>
              <h3>Frontend Development</h3>
              <p class="services-text-1"></p>
              <a href="#" class="btn">Read More</a>
            </div>

            <div class="services-box">
              <i class='bx bxl-discord-alt'></i>
              <h3>Discord Bot Development</h3>
              <p class="services-text-2"></p>
              <a href="#" class="btn">Read More</a>
            </div>

            <div class="services-box">
              <i class='bx bxs-data'></i>
              <h3>Backend Development</h3>
              <p class="services-text-3"></p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
      </section>

      <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Project</span></h2>

        <div class="portfolio-container">
          <div class="portfolio-box">
            <img src="https://images-ext-2.discordapp.net/external/MBuT3Np4p3j-WFU6YdR0y4xpd3Unf_E-gL8-SM0sWdU/https/opengraph.githubassets.com/a792db5e10bfe3a60559ad52cd0ccf4396e525a4c270dd106f5dd2cb22f26084/Sky-seed0215/repository-tracker?width=1800&height=900" alt="port1" />
            <div class="portfolio-layer">
              <h4>Github Repository Tracker</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='#'><i class='bx bxl-github'></i></a>
            </div>
          </div>
          <div class="portfolio-box">
            <img src="https://images-ext-2.discordapp.net/external/MBuT3Np4p3j-WFU6YdR0y4xpd3Unf_E-gL8-SM0sWdU/https/opengraph.githubassets.com/a792db5e10bfe3a60559ad52cd0ccf4396e525a4c270dd106f5dd2cb22f26084/Sky-seed0215/repository-tracker?width=1800&height=900" alt="port1" />
            <div class="portfolio-layer">
              <h4>Github Repository Tracker</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='#'><i class='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>

        <form action='#' class="form-base">
          <div class="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder='Email Address' />
          </div>
          <div class="input-box">
            <input type="tel" placeholder='Mobile Number' />
            <input type="text" placeholder='Email Subject' />
          </div>
          <textarea name='' id='' cols="30" rows="10" placeholder='Your Message'></textarea>
          <input type="submit" value="Send Message" class="btn" />
        </form>
      </section>

      {/* footer */}

      <footer class="footer">
        <div class="footer-text">
          <p>Copyright &copy; 2023 by skydelta | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
          <AnchorLink class="up-btn" href="#home"><i class="bx bx-up-arrow-alt"></i></AnchorLink>
        </div>
      </footer>
    </body>
  );
}

export default App;
