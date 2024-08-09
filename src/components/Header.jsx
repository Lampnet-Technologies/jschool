import React, { useState } from "react";
import { Link } from "react-router-dom";
import JschLogo from "../assets/images/Jsch Logo.png";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowMore(false);
  };


  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="header--wrapper">
      <div className="header">
        <div className="header--content">
          <div className="logo--menu">
            <i className="fa-solid fa-bars menu" onClick={toggleMenu}></i>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={JschLogo} alt="Logo" className="Jsch--logo" />
            </Link>
          </div>

          <nav className="desktop--nav">
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
                </ul>
              )}
            </ul>
            <div className="login--desktop">
              <div className="portal--btn">
                <button onClick={closeMenu}>
                  <Link to="/login" className="link">
                    Portal Login
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile view navBar */}
        {isMenuOpen && (
          <nav>
            <ul className="nav--links mobile">
              <i className="fa-solid fa-x menu" onClick={toggleMenu}></i>
              <div className="mobile--links">
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
                  </ul>
                )}
                <div className="login login--mobile">
                  <div className="portal--btn">
                    <button onClick={closeMenu}>
                      <Link to="/login" className="link">
                        Portal Login
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
