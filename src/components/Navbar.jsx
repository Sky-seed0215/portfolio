import './css/Navbar.css';

import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
    return (
        <body>
          <header class="header">
            <a href="/" class="logo">Portfolio.</a>
            <nav class="navbar">
              <AnchorLink href="#home">Home</AnchorLink>
              <AnchorLink href="#about">About</AnchorLink>
              <AnchorLink href="#services">Skills</AnchorLink>
              <AnchorLink href="#portfolio">Portfolio</AnchorLink>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </nav>
          </header>
        </body>
    )
}

export default Navbar;
