import React from "react";
import "../welcome/Welcome.css";
import Image from "../../assets/images/34.jpg";
import Image2 from "../../assets/images/33.jpg";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-left">
          <h2>Welcome</h2>
          <p className="wlcome-school">to JSchool</p>
          <br />
          <p>
            We are committed to developing outstanding young people with the
            skills, resilience and initiative to flourish in a rapidly changing
            world.
          </p>
          <button>
            <Link className='link' to="/about">Learn More</Link>
          </button>
        </div>
        <div className="welcome-right">
          <img src={Image} />
          <div className="principal">
            <img src={Image2} />
          </div>
        </div>
      </div>
    </div>
  );
}
