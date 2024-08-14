import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../css/pages.css";
import RandomImage from "../assets/images/30.jpg";
import BannerImage from "../assets/images/38.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import Banner from "../components/banner/Banner";
import PrincipleImage from "../assets/images/principle.svg";
import CallToAction from "../components/call-to-action/CallToAction";
import {
  FaArrowRight,
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaPlay,
  FaQuoteLeft,
  FaQuoteRight,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function AboutPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pages">
      <Banner play={<FaPlay />} image={BannerImage} title="About JSchool" />
      <div className="jschool--container">
        <div className="jschool--content">
          <div className="about--jschool">
            <p className="banner-text">
              It is with great pleasure that we introduce The Court Hill College
              - an international Junior and Senior Secondary School located in
              the heart of Opebi, Ikeja Lagos.
            </p>
            <div className="jschool--header">
              <div className="jschool--body">
                <div
                  className="jschool-body-text"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <h4>Mission</h4>
                  <p>
                    The JSchool is a continuation of The Kids' Court School's
                    12-year tradition of excellence in education provision. We
                    have gained mastery in the provision of the Montessori,
                    British, and Nigerian National curricula. We are proud to
                    have a 100% pass rate for all our students seeking entry
                    into primary or secondary schools across the globe since
                    2009. We can only get better.
                  </p>
                </div>

                <div
                  className="jschool-body-text"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h4>Vision</h4>
                  <p>
                    The JSchool is a continuation of The Kids' Court School's
                    12-year tradition of excellence in education provision. We
                    have gained mastery in the provision of the Montessori,
                    British, and Nigerian National curricula. We are proud to
                    have a 100% pass rate for all our students seeking entry
                    into primary or secondary schools across the globe since
                    2009. We can only get better.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-principle-container">
            <div className="principle-text">
              <div
                className="welcome-quote"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="quote-text">
                  <p>
                    The JSchool is a continuation of The Kids' Court School's
                    12-year tradition of excellence in education provision. We
                    have gained mastery in the provision of the Montessori,
                    British, and ass rate for all our students seeking eer.
                  </p>
                  <p className="principle-name">John Doe, Principal</p>
                </div>
                <div className="quote-icon">
                  <FaQuoteRight />
                </div>
              </div>
              <br />
              <div
                className="welcome-image"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img src={PrincipleImage} alt="principal image" />
              </div>
            </div>
            <div className="bottom-background"></div>
          </div>

          <div className="about-state-of-art">
            <div
              className="state-of-art-left"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img src={RandomImage} alt="" className="image-left" />
              <img src={BannerImage} alt="" className="image-right" />
            </div>
            <div
              className="state-of-art-right"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h4>State-of-the-Art Facilities</h4>
              <p>
                Our school boasts modern and well-equipped classrooms,
                state-of-the-art science and computer laboratories, a
                well-stocked library, and other facilities.
              </p>
              <p>
                Our school boasts modern and well-equipped classrooms,
                state-of-the-art science and computer laboratories, a
                well-stocked library, and other facilities.
              </p>
            </div>
          </div>

          <div className="about-info-section">
            <div
              className="about-info-left"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h4>Achieving academic excellence</h4>
              <p>
                We prioritize academic excellence. Our dedicated and experienced
                faculty delivers a rigorous and comprehensive curriculum that is
                designed to challenge and inspire students at every level.
              </p>
              <p>
                We prioritize academic excellence. Our dedicated and experienced
                faculty delivers a rigorous and comprehensive curriculum that is
                designed to challenge and inspire students at every level.
              </p>
              <p>
                We prioritize academic excellence. Our dedicated and experienced
                faculty delivers a rigorous and comprehensive curriculum that is
                designed to challenge and inspire students at every level.
              </p>
            </div>
            <div
              className="about-info-right"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src={BannerImage} alt="" />
            </div>
          </div>

          <div className="about-info-section section-2">
            <div
              className="about-info-left"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h4>International Curriculum</h4>
              <p>
                We offer a globally recognized curriculum. Our curriculum is
                designed to provide students with a well-rounded education,
                focusing on core subjects and essential life skills
              </p>
              <p>
                We offer a globally recognized curriculum. Our curriculum is
                designed to provide students with a well-rounded education,
                focusing on core subjects and essential life skills
              </p>
            </div>
            <div
              className="about-info-right"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src={BannerImage} alt="" />
            </div>
          </div>

          <div className="about-info-section section-3">
            <div
              className="about-info-left"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h4>Individualized support</h4>
              <p>
                Our dedicated team of educators are committed to providing
                individualized support to ensure that every student reaches
                their full potential and shine bright as they should
              </p>
              <p>
                Our dedicated team of educators are committed to providing
                individualized support to ensure that every student reaches
                their full potential and shine bright as they should
              </p>
            </div>
            <div
              className="about-info-right"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src={BannerImage} alt="" />
            </div>
          </div>

          <section className="about-community">
            <div className="about-community--content">
              <div className="about-community--background">
                <div
                  className="about-community--info"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h2>The School Community</h2>
                  <p>Share your school pride with the world!</p>
                  <div className="about-community--socials">
                    <FaFacebook className="community--icon" />
                    <FaLinkedin className="community--icon" />
                    <FaX className="community--icon" />
                    <FaYoutube className="community--icon" />
                    <FaGooglePlusG className="community--icon" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CallToAction
            icon={<FaArrowRight />}
            tour="Take a virtual tour"
            pupil="Hear from our students"
            contact="Contact us"
            admissionOverView="Admission Overview"
            news="News & events"
            support="Learning support"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
