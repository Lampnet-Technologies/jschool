import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer--container">
          <div className="footer--content">
            <p>
              JSchool is a fully accredited, independent, international school
              in Lagos, Nigeria.
            </p>
            <br />
            <div className="footer--location">
              <p>
                <FaLocationDot /> 2400 Fresno St, Fresno, CA 93721, Nigeria
              </p>
              <p>
                <FaPhoneAlt /> +234 444-555-6666
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="footer--content">
            <h2>Vital Links</h2>
            <div className="footer--links">
              <Link to="/" className="links">
                Home
              </Link>
              <Link to="/about" className="links">
                About JSchool
              </Link>
              <Link to="/admission" className="links">
                Admission
              </Link>
              <Link to="/news" className="links">
                News
              </Link>
            </div>
          </div>
          <br />
          <br />
          <div className="footer--content">
            <div className="footer--socials">
              <h2>Follow Us</h2>
              <div className="footer--icons">
                <FaFacebook className="school--socials" />
                <FaTwitter className="school--socials" />
                <FaLinkedin className="school--socials" />
                <FaYoutube className="school--socials" />
                <FaGooglePlusG className="school--socials" />
              </div>
              <p>Copyright © School Management System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
