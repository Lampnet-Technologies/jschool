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
    <Carousel
      className="slider"
      nextIcon={<FaForward style={{ color: "#ff2a2a" }} />}
      prevIcon={
        <FaForward style={{ color: "#ff2a2a", transform: "rotate(180deg)" }} />
      }
    >
      <Carousel.Item>
        <img src={SliderImage4} alt="" />
        <Carousel.Caption className="caption">
          <div className="carousel--content">
            <div className="carousel1">
              <p>A TRADITION SINCE 1999</p>
              <h4>Offering Your Child Bright Future</h4>
              <p>
                JSchool graduates are studying in the world's most prestigious
                universities.
              </p>
               <Link to='/admission'>
         <button className="btn-2">Apply Now</button>
         </Link>
            </div>
            <div className="carousel2">
              <div className="play">
                <Link className="play--video" to='/video'>
                <FaPlay />
                </Link>
              </div>
              <div className="play-content">
                <p>JSchool</p>
                <h2>CAMPUS TOUR</h2>
                <Link to='/video'>
                <p>WATCH VIDEO</p>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SliderImage1} alt="" />
        <Carousel.Caption className="caption">
          <div className="carousel--content">
            <div className="carousel1">
              <p>A TRADITION SINCE 1999</p>
              <h4>Offering Your Child Bright Future</h4>
              <p>
                JSchool graduates are studying in the world's most prestigious
                universities.
              </p>
               <Link to='/admission'>
         <button className="btn-2">Apply Now</button>
         </Link>
            </div>
            <div className="carousel2">
              <div className="play">
                <Link className="play--video" to='/video'>
                <FaPlay />
                </Link>
              </div>
              <div className="play-content">
                <p>JSchool</p>
                <h2>CAMPUS TOUR</h2>
                <Link to='/video'>
                <p>WATCH VIDEO</p>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SliderImage2} alt="" />
        <Carousel.Caption className="caption">
          <div className="carousel--content">
            <div className="carousel1">
              <p>A TRADITION SINCE 1999</p>
              <h4>Offering Your Child Bright Future</h4>
              <p>
                JSchool graduates are studying in the world's most prestigious
                universities.
              </p>
               <Link to='/admission'>
         <button className="btn-2">Apply Now</button>
         </Link>
            </div>
            <div className="carousel2">
              <div className="play">
                <Link className="play--video" to='/video'>
                <FaPlay />
                </Link>
              </div>
              <div className="play-content">
                <p>JSchool</p>
                <h2>CAMPUS TOUR</h2>
                <Link to='/video'>
                <p>WATCH VIDEO</p>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SliderImage3} alt="" />
        <Carousel.Caption className="caption">
          <div className="carousel--content">
            <div className="carousel1">
              <p>A TRADITION SINCE 1999</p>
              <h4>Offering Your Child Bright Future</h4>
              <p>
                JSchool graduates are studying in the world's most prestigious
                universities.
              </p>
               <Link to='/admission'>
         <button className="btn-2">Apply Now</button>
         </Link>
            </div>
            <div className="carousel2">
              <div className="play">
                <Link className="play--video" to='/video'>
                <FaPlay />
                </Link>
              </div>
              <div className="play-content">
                <p>JSchool</p>
                <h2>CAMPUS TOUR</h2>
                <Link to='/video'>
                <p>WATCH VIDEO</p>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
