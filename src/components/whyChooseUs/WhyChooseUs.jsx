import React, { useEffect } from "react";
import "../whyChooseUs/WhyChooseUs.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import RandomImage from "../../assets/images/support-banner.svg";
import BannerImage from "../../assets/images/Pupil-banner.svg";
import CallToAction from "../call-to-action/CallToAction";
import { FaArrowRight } from "react-icons/fa";

export default function WhyChooseUs() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="whyChooseUs-wrapper">
        <div className="whyChooseUs-content">
          <div className="whyChooseUs-text">
            <div
              className="text-content"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Achieving in a competitive world</h2>
              <p>
                Education in English: Cambridge International Programmed and
                qualified native English's speaking teachers.
              </p>
              <button>
                <Link to="/about" className="link">
                  FIND OUT MORE
                </Link>
              </button>
            </div>
          </div>
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
              state-of-the-art science and computer laboratories, a well-stocked
              library, and other facilities.
            </p>
            <p>
              Our school boasts modern and well-equipped classrooms,
              state-of-the-art science and computer laboratories, a well-stocked
              library, and other facilities.
            </p>
            <div className="state-of-art-btn">
            <button>
              <Link to='/about' className="link">
              Learn more
              </Link>
            </button>
          </div>
          </div>
        </div>

        <div className="whyChooseUs-content">
          <div className="whyChooseUs-text ">
            <div
              className="text-content engage"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Engage with the world around you</h2>
              <p>
                The wider our horizons, the further we can travel. In a
                hyper-connected world, engaging with the wider world is
                essential. A diverse school community is a good place to start
                exploring our knowledge of the world, our relationships with
                others and our understanding of difference.
              </p>
              <button>
                <Link to="/about" className="link">
                  FIND OUT MORE
                </Link>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
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
        <div className="whyChooseUs-content">
          <div className="whyChooseUs-text">
            <div
              className="text-content"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Choose your own path</h2>
              <p>
                The ability for students to choose the right subjects and
                courses lies at the heart of a personalised education. Making
                the right choice is the first step on the road to success.
              </p>
              <button>
                <Link to="/about" className="link">
                  FIND OUT MORE
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
