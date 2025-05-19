import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>React project</h1>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`nav-links ${showLinks ? "show-links" : ""}`}>
          <li><a className="nav-link" href="#home" onClick={() => setShowLinks(false)}>Home</a></li>
          <li><a className="nav-link" href="#about" onClick={() => setShowLinks(false)}>About</a></li>
          <li><a className="nav-link" href="#services" onClick={() => setShowLinks(false)}>Services</a></li>
          <li><a className="nav-link" href="#tours" onClick={() => setShowLinks(false)}>Tours</a></li>
          <li><a className="nav-link" href="#contact" onClick={() => setShowLinks(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
