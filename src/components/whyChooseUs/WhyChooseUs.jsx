import React, { useEffect } from "react";
import "../whyChooseUs/WhyChooseUs.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

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
