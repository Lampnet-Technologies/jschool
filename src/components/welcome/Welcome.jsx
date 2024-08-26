import React, { useEffect } from "react";
import "../welcome/Welcome.css";
import Image from "../../assets/images/34.jpg";
import Image2 from "../../assets/images/33.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Welcome() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="welcome-container">
        <div
          className="welcome-left"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2>Welcome</h2>
          <p className="wlcome-school">to jenny school</p>
          <br />
          <p>
            We are committed to developing outstanding young people with the
            skills, resilience and initiative to flourish in a rapidly changing
            world.
          </p>
          <button>
            <Link className="link" to="/about">
              Learn More
            </Link>
          </button>
        </div>
        <div
          className="welcome-right"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={Image} />
          <div className="principal">
            <img src={Image2} />
          </div>
        </div>
      </div>
    </div>
  );
}
