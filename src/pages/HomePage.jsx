import React from "react";
import Slider from "../components/Carousel";
import {
  FaArrowRight,
  FaFacebook,
  FaGooglePlusG,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FaBuildingFlag,
  FaListCheck,
  FaNoteSticky,
  FaX,
} from "react-icons/fa6";
import AboutImage from "../assets/images/43.png";
import PrincipalImage from "../assets/images/37.jpg";
import RandomImage from "../assets/images/30.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import gallery from "../components/GalleryData";

export default function HomePage() {
  return (
    <div className="homePage pages">
      <Slider />
      <section className="intro--section">
        <div className="edu--info1">
          <FaGraduationCap className="grad--icon" />
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info2">
          <FaBuildingFlag className="grad--icon" />
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info3">
          <FaNoteSticky className="grad--icon" />
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info4">
          <FaListCheck className="grad--icon" />
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
      </section>

      <section className="about--section ">
        <div className="about--content">
          <div className="about--text">
            <div className="line"></div>
            <h1>About School</h1>
            <br />
            <p>
              JSchool is an independent, non-governmental organisation,
              established to provide high-quality education to local and
              expatriate communities in Bangladesh and United State of
              America...
            </p>
            <br />
            <Link to='/about'>
            <button className="btn">Learn More</button>
            </Link>
          </div>
          <br />
          <div className="about--image">
            <img src={RandomImage} className="img" alt="Image" />
            <div className="school--rating">
              <div>
                <h2>12+</h2>
                <p>Teachers</p>
              </div>
              <div>
                <h2>44+</h2>
                <p>Students</p>
              </div>
              <div>
                <h2>10+</h2>
                <p>Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply--section">
        <div className="apply--content">
          <h1>Apply for fall 2025</h1>
          <br />
          <p>
            Now open for Fall 2025 applications. The closing date for this
            session is Friday 19 August, 2025.
          </p>
          <Link to="/admission">
            <button className="btn-2">Apply Now</button>
          </Link>
        </div>
      </section>

      <section className="principle--section">
        <div className="principal--content">
          <img src={PrincipalImage} className="img" alt="Principal" />
          <div className="principal--message">
            <div className="line"></div>
            <h1>From the Principal</h1>
            <p>
              “JSchool is a welcoming Catholic community renowned for its
              integrity and creative learning approaches that bring out the best
              in boys. Our rich Salesian charism underpinned by the educational
              principles of founder, St John Bosco, provides the foun”
            </p>
            <span>
              <span className="dash"></span> John Doe
            </span>
            <p className="school">Principle, JSchool</p>
          </div>
        </div>
      </section>

      <section className="teachers">
        <div className="teachers--content">
          <div className="line"></div>
          <h1>Our Teachers</h1>
          <br />
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              pagination: false,
              arrows: false,
              gap: "2rem",
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              breakpoints: {
                768: {
                  perPage: 2,
                },
              },
            }}
            // aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="teacher">
                <img src={AboutImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={PrincipalImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={AboutImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={PrincipalImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={AboutImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={PrincipalImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="teacher">
                <img src={PrincipalImage} className="img img-2" alt="Image 1" />
                <div className="teacher--overlay">
                  <div className="teacher--socials">
                    <div className="social--icons">
                      <FaFacebook className="socials" />
                      <FaInstagram className="socials" />
                      <FaLinkedin className="socials" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="splide--text">
                <h4>John Doe</h4>
                <p>Teacher</p>
              </div>
            </SplideSlide>
          </Splide>
          <Link className="link" to="/teachers">
            <button className="teachers--btn">
              See All Our Certified Teachers
            </button>
          </Link>
        </div>
      </section>

      <section className="community">
        <div className="community--content">
          <div className="community--background">
            <div className="line-2"></div>
            <h2>The School Community</h2>
            <p>Share your school pride with the world!</p>
            <div className="community--socials">
              <FaFacebook className="community--icon" />
              <FaLinkedin className="community--icon" />
              <FaX className="community--icon" />
              <FaYoutube className="community--icon" />
              <FaGooglePlusG className="community--icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery--container">
          <div className="line"></div>
          <div className="gallery--header">
            <h4>JSchool's Gallery</h4>
            <Link to="/gallery" className="link">
              <p>
                See More <FaArrowRight />
              </p>
            </Link>
          </div>
          <div className="gallery--img">
            {gallery.slice(0, 3).map((gallery) => (
              <div key={gallery.id}>
                <img src={gallery.img} className="img" />
                <p>{gallery.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
