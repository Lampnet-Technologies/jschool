import React, { useState } from "react";
import { Link } from "react-router-dom";
import JschLogo from "../assets/images/Jsch Logo.png";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setShowLogin(false);
    setIsMenuOpen(false);
    setShowMore(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const handleShowMore = () => {
    setShowMore(!showMore);
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
          </div>
          <div className="logo">
            <Link to="/">
              <img src={JschLogo} alt="Logo" className="Jsch--logo" />
            </Link>
          </div>
          <nav>
            <ul className="desktop">
              <li>
                <Link className="link" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li>
                <Link className="link" to="/admission" onClick={closeMenu}>
                  Admission
                </Link>
              </li>
              <li>
                <Link className="link" to="/news" onClick={closeMenu}>
                  Events & News
                </Link>
              </li>

              <li>
                <Link className="link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li onClick={handleShowMore} className="more--btn">
                More <FaChevronDown />{" "}
              </li>
              {showMore && (
                <ul className="showMore">
                  <li>
                    <Link className="link" to="/gallery" onClick={closeMenu}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/teachers" onClick={closeMenu}>
                      Teachers
                    </Link>
                  </li>
                </ul>
              )}
              <div className="login login--desktop">
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
                    <Link to="/admission" className="link">
                      Enroll
                    </Link>
                  </button>
                </div>
              </div>
            </ul>
          </nav>
        </div>
        {/* Mobile view navBar */}
        {isMenuOpen && (
          <nav>
            <ul className="nav--links mobile">
              <li>
                <Link className="link" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/admission" onClick={closeMenu}>
                  Admission
                </Link>
              </li>

              <li>
                <Link className="link" to="/news" onClick={closeMenu}>
                  Events & News
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li onClick={handleShowMore} className="more--btn">
                More <FaChevronDown />
              </li>
              {showMore && (
                <ul className="showMore">
                  <li>
                    <Link className="link" to="/gallery" onClick={closeMenu}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/teachers" onClick={closeMenu}>
                      Teachers
                    </Link>
                  </li>
                </ul>
              )}
              <div className="login login--mobile">
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
                    <Link to="/admission" className="link--enroll">
                      Enroll
                    </Link>
                  </button>
                </div>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
