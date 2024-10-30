import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import JschLogo from "../assets/images/Jsch Logo.png";
import { FaChevronDown, FaLock } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMore(false); // Close dropdown when menu is toggled
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowMore(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    if (isMenuOpen) setIsMenuOpen(false); // Close main menu if 'More' is opened
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header--wrapper" ref={menuRef}>
      <div className="header">
        <div className="header--content">
          <div className="logo--menu">
            <i className="fa-solid fa-bars menu" onClick={toggleMenu}></i>
          </div>
          <div className="logo">
            <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>
              <img src={JschLogo} alt="Logo" className="Jsch--logo" />
            </Link>
          </div>

          <nav className="desktop--nav">
            <ul className="desktop">
              <li>
                <Link className="link" to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>
                  About
                </Link>
              </li>

              <li>
                <Link className="link" to="/admission" onClick={() => { closeMenu(); scrollToTop(); }}>
                  Admission
                </Link>
              </li>

              <li onClick={handleShowMore} className="more--btn">
                More <FaChevronDown className="chevrondown" />
              </li>
              {showMore && (
                <ul className="showMore" onClick={closeMenu}>
                  <li>
                    <Link className="link" to="/gallery" onClick={() => { closeMenu(); scrollToTop(); }}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/teachers" onClick={() => { closeMenu(); scrollToTop(); }}>
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/news" onClick={() => { closeMenu(); scrollToTop(); }}>
                      Events & News
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}>
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
            <div className="login--desktop">
              <div className="portal--btn">
                <button onClick={() => { closeMenu(); scrollToTop(); }}>
                  <Link to="/login" className="link login-portal">
                    <FaLock />
                    <p>Portal Login</p>
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
                  <Link className="link" to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/admission" onClick={() => { closeMenu(); scrollToTop(); }}>
                    Admission
                  </Link>
                </li>

                <li onClick={handleShowMore} className="more--btn">
                  More <FaChevronDown />
                </li>
                {showMore && (
                  <ul className="showMore" onClick={closeMenu}>
                    <li>
                      <Link className="link" to="/gallery" onClick={() => { closeMenu(); scrollToTop(); }}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/teachers" onClick={() => { closeMenu(); scrollToTop(); }}>
                        Teachers
                      </Link>
                    </li>

                    <li>
                      <Link className="link" to="/news" onClick={() => { closeMenu(); scrollToTop(); }}>
                        Events & News
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="login login--mobile">
                  <div className="portal--btn">
                    <button onClick={() => { closeMenu(); scrollToTop(); }}>
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
