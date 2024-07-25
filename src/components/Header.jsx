import React, { useState } from "react";
import { Link } from "react-router-dom";
import JschLogo from "../assets/images/Jsch Logo.png";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setShowLogin(false);
    setIsMenuOpen(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header--wrapper">
      <div className="header">
        <div className="header--content">
          <div className="logo--menu">
            {isMenuOpen ? (
              <i className="fa-solid fa-x menu" onClick={toggleMenu}></i>
            ) : (
              <i className="fa-solid fa-bars menu" onClick={toggleMenu}></i>
            )}

            <div className="logo">
              <Link to="/">
                <img src={JschLogo} alt="Logo" className="Jsch--logo" />
              </Link>
            </div>
          </div>
          <nav>
            <ul className="desktop">
              <li>
                <Link className="link" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/teachers" onClick={closeMenu}>
                  Teachers
                </Link>
              </li>
              <li>
                <Link className="link" to="/news" onClick={closeMenu}>
                  Events & News
                </Link>
              </li>
              <li>
                <Link className="link" to="/gallery" onClick={closeMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link" to="/admission" onClick={closeMenu}>
                  Admission
                </Link>
              </li>
            </ul>
          </nav>
          <div className="login">
            <h4 onClick={toggleLogin}>Login</h4>
            {showLogin && (
              <ul className="login--links">
                <li>
                  <Link className="link" to="/student" onClick={closeMenu}>
                    Student
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/teacher" onClick={closeMenu}>
                    Teacher
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/parent" onClick={closeMenu}>
                    Parent
                  </Link>
                </li>
              </ul>
            )}
          <div className="enroll--btn">
            <button>
              <Link to='/admission' className="link">
              Enroll
              </Link>
            </button>
          </div>
          </div>
        </div>
        {/* Mobile view navBar */}
        {isMenuOpen && (
          <nav>
            <ul className="nav--links mobile">
              <li>
                <Link className="link" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/teachers" onClick={closeMenu}>
                  Teachers
                </Link>
              </li>
              <li>
                <Link className="link" to="/news" onClick={closeMenu}>
                  Events & News
                </Link>
              </li>
              <li>
                <Link className="link" to="/gallery" onClick={closeMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link" to="/admission" onClick={closeMenu}>
                  Admission
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}