import React, {useEffect} from "react";
import "./SeeForYourSelf.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SeeForYourSelf() {
    useEffect(() => {
        AOS.init();
      });
    return (
    <div>
      <div className="seeForYourSelf-container">
        <div className="seeForYourSelf-content">
          <div className="content-text" data-aos="fade-up"
                data-aos-duration="1500">
            <h1>Come and see for yourself</h1>
            <p>
              At JSchool, We deliver a blend of the Montessori, British and
              Nigerian curriculum using engaging and empowering instructional
              methods as we lay in our students, a firm foundation for a life of
              success and global relevance.
            </p>
            <div className="seeForYourSelf-btn">
              <button>
                <Link to='/gallery' className="link"> Take a Tour</Link>
              </button>
              <button className="view-school-btn">
                <Link to='/about' className="link"> View School</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
