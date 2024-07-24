import React, { useState, useEffect } from "react";
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
import JsLogo from "../assets/images/Jsch Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [newsLetter, setNewsLetter] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!/\S+@\S+\.\S+/.test(newsLetter.email)) {
      formErrors.email = "Please provide a valid email address";
    }
    return formErrors; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      toast.success("Subscribed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setNewsLetter({
        email: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsLetter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div>
      <div className="footer">
        <div className="footer--container">
          <div className="footer--content">
            <img src={JsLogo} className="footer--logo" alt="JSchool logo" />
            <p>
              JSchool is a fully accredited, independent, international school
              in Lagos, Nigeria.
            </p>
            <br />
            <div className="footer--location">
              <p>
                <FaLocationDot /> 1, Jenny school road, Ekete, Delta
                State, Nigeria.
              </p>
              <p>
                <FaPhoneAlt /> +234 09069417489
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
            <div className="news-letter">
              <h4>Subscribe to Our Newsletter</h4>
              <p>For latest news about school and more</p>
              <form className="news--letter--input" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={newsLetter.email}
                />
                <button type="submit">Subscribe</button>
              </form>
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="footer--socials">
              <h2>Follow Us</h2>
              <div className="footer--icons">
                <FaFacebook className="school--socials" />
                <FaTwitter className="school--socials" />
                <FaLinkedin className="school--socials" />
                <FaYoutube className="school--socials" />
                <FaGooglePlusG className="school--socials" />
              </div>
              <br />
              <p>Copyright © School Management System</p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
