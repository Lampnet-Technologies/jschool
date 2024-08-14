import React, { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/banner/Banner";
import BannerImage from "../assets/images/31.jpg";
import CallToAction from "../components/call-to-action/CallToAction";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { value, name } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors({
      ...errors,
      [name]: "",
    });
    e.preventDefault();
  }

  const validate = () => {
    let formErrors = {};
    if (!form.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!form.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!form.subject.trim()) {
      formErrors.subject = "Subject is required";
    }
    if (!form.message.trim()) {
      formErrors.message = "Message is required";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      toast.success("Message Sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
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
      <div className="pages">
        <Banner title="Contact Us" image={BannerImage} />
        <div className="contact--page">
          <div className="contact--container">
            <div className="contact--address">
              <div className="contact--text">
                <h4>Contact Details:</h4>
                {/* <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque voluptate assumenda vel autem a nesciunt quo sequi,
                  aperiam nemo, alias amet in, maxime aliquid ad?
                </p> */}

                <div className="contact--location">
                  <p>
                    <FaLocationDot className="contact--icon" /> 2400 Lagos,
                    Nigeria
                  </p>
                  <p>
                    <FaPhoneAlt className="contact--icon" /> +234 444-555-6666
                  </p>
                  <p>
                    <FaEnvelope className="contact--icon" /> info@jschool.school
                  </p>
                </div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed"
                  className="google--map"
                ></iframe>
              </div>
            </div>

            <div className="contact--message">
              {/* <div className="line"></div> */}
              <h4 className="contact--header">
                Get in Touch
              </h4>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="name--email">
                  <div className="input">
                    <label htmlFor="name">Your Name</label>
                    <br />
                    <input
                      type="text"
                      value={form.name}
                      name="name"
                      placeholder="E.g John Doe"
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      value={form.email}
                      name="email"
                      placeholder="E.g johndoe@gmail.com"
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="subject">Subject</label>
                  <br />
                  <input
                    type="text"
                    value={form.subject}
                    name="subject"
                    placeholder="subject"
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="error">{errors.subject}</p>}
                </div>
                <div className="input">
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea
                    type="text"
                    value={form.message}
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                  />
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Send Message</button>
              </form>
              <ToastContainer />
            </div>
          </div>
          <CallToAction
            icon={<FaArrowRight />}
            tour="Take a virtual tour"
            pupil="Hear from our students"
            contact="Contact us"
            admissionOverView="Admission Overview"
            news="News & events"
            support="Learning support"
          />
          <br />
        </div>
        <Footer />
      </div>
    </div>
  );
}
