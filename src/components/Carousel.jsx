import Carousel from "react-bootstrap/Carousel";
import SliderImage1 from "../assets/images/31.jpg";
import SliderImage2 from "../assets/images/36.jpg";
import SliderImage3 from "../assets/images/38.jpg";
import SliderImage4 from "../assets/images/43.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaForward, FaPlay } from "react-icons/fa";

export default function Slider() {
  return (
    <div className="slider--page">
      <div className="slider--content">
        <Carousel
          className="slider"
          nextIcon={<FaForward style={{ color: "#ff2a2a" }} />}
          prevIcon={
            <FaForward
              style={{ color: "#ff2a2a", transform: "rotate(180deg)" }}
            />
          }
        >
          {[SliderImage4, SliderImage1, SliderImage2, SliderImage3].map(
            (image, index) => (
              <Carousel.Item key={index}>
                <img src={image} alt={`Slider image ${index + 1}`} />
                <Carousel.Caption className="caption">
                  <div className="carousel--content">
                    <div className="carousel1">
                      <p>A TRADITION SINCE 1999</p>
                      <h4>Offering Your Child Bright Future</h4>
                      <p>
                        JSchool graduates are studying in the world's most
                        prestigious universities.
                      </p>
                      <div className="hero--btn">
                      <Link to="/admission" className="link">
                        <button className="btn-2 button-1">Enroll Now</button>
                      </Link>
                      <Link to="/gallery" className="link">
                        <button className="btn-2">Take a Tour</button>
                      </Link>
                      </div>
                    </div>
                    <div className="carousel2">
                      <div className="play">
                        <Link
                          className="play--video"
                          to="https://www.youtube.com/watch?v=qccyDMZASbA
"
                          target="_blank"
                        >
                          <FaPlay />
                        </Link>
                      </div>
                      <div className="play-content">
                        <p>JSchool</p>
                        <h2>CAMPUS TOUR</h2>
                        <Link
                          to="https://www.youtube.com/watch?v=qccyDMZASbA
"
                          target="_blank"
                        >
                          <p>WATCH VIDEO</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </div>
    </div>
  );
}
