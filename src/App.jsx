import './App.css';
import './script.js'
import logo from './images/img.png';
import about from './images/about.png';

import Navbar from './components/Navbar';

function App() {
  return (
    <body>
      <Navbar />

      <section class="home">
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
        <h2 class="heading">My <span>Services</span></h2>

        <div class="services-container">
            <div class="services-box">
              <i class='bx bxl-react'></i>
              <h3>Frontend Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <a href="#" class="btn">Read More</a>
            </div>

            <div class="services-box">
              <i class='bx bxl-discord-alt'></i>
              <h3>Discord Bot Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <a href="#" class="btn">Read More</a>
            </div>

            <div class="services-box">
              <i class='bx bxs-data'></i>
              <h3>Backend Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
      </section>
    </body>
  );
}

export default App;
