import './css/Navbar.css';

function Navbar() {
    return (
        <body>
          <header class="header">
            <a href="/" class="logo">Portfolio.</a>
            <nav class="navbar">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/skills">Skills</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </nav>
          </header>
        </body>
    )
}

export default Navbar;
