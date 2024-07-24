import React, { useEffect, useState } from "react";
import Slider from "../components/Carousel";
import {
  FaArrowRight,
  FaFacebook,
  FaGooglePlusG,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
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
import AOS from "aos";
import "aos/dist/aos.css";
import client from "../client";
import Typed from "typed.js";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  const [posts, setPosts] = useState([]);

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["About", "Jschool"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const al = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(al.current, {
      strings: ["News and Events", "Blog"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="homePage pages">
      <Slider />
      <h4 className="intro--header">Why you should be here</h4>
      <section className="intro--section">
        <div className="edu--info1">
          <div className="intro--icon">
            <FaGraduationCap className="grad--icon" />
          </div>
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info2">
          <div className="intro--icon">
            <FaBuildingFlag className="grad--icon" />
          </div>
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info3">
          <div className="intro--icon">
            <FaNoteSticky className="grad--icon" />
          </div>
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
        <div className="edu--info4">
          <div className="intro--icon">
            <FaListCheck className="grad--icon" />
          </div>
          <p>
            Education in English: Cambridge International Programmed and
            qualified native English's speaking teachers.
          </p>
        </div>
      </section>

      <section className="js--img">
        <img src={AboutImage} alt="" />
      </section>

      <section className="about--section ">
        <div className="about--content">
          <div
            className="about--text"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="line"></div>
            <h1>
              About <span ref={el} />
            </h1>

            <br />
            <p>
              JSchool is an independent, non-governmental organisation,
              established to provide high-quality education to local and
              expatriate communities in Bangladesh and United State of
              America...
            </p>
            <br />
            <Link to="/about">
              <button className="btn">Enroll now</button>
            </Link>
            <div className="school--rating">
              <div className="rating">
                <div className="about--icon">
                  <FaGraduationCap className="grad--icon" />
                </div>
                <h2>12+</h2>
                <p>Teachers</p>
              </div>
              <div className="rating">
                <div className="about--icon">
                  <FaGraduationCap className="grad--icon" />
                </div>
                <h2>44+</h2>
                <p>Students</p>
              </div>
              <div className="rating">
                <div className="about--icon">
                  <FaGraduationCap className="grad--icon" />
                </div>
                <h2>10+</h2>
                <p>Graduates</p>
              </div>
            </div>
          </div>

          <br />
          <div
            className="about--image"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={RandomImage} className="img" alt="Image" />
          </div>
        </div>
      </section>

      {/* <section className="apply--section">
        <div
          className="apply--content"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
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
          <img
            src={PrincipalImage}
            className="img"
            alt="Principal"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div
            className="principal--message"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
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
      </section> */}

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
            <button className="teachers--btn">See All Teachers</button>
          </Link>
        </div>
      </section>

      <section className="News--Events">
        <div className="news--container">
          <h1 className="news--title">
            School <span ref={al} />
          </h1>
          <br />
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              autoplay: true,
              pauseOnHover: true,
              gap: "1rem",
              arrows: false,
              breakpoints: {
                640: {
                  perPage: 1,
                },
                1024: {
                  perPage: 2,
                },
              },
            }}
            aria-label="School News and Events"
          >
            {posts.map((post) => (
              <SplideSlide key={post.slug.current}>
                <article>
                  <div className="article--img">
                    <img
                      src={post.mainImage.asset.url}
                      className="img"
                      alt={post.title}
                    />
                  </div>
                  <br />
                  <h2>{post.title}</h2>
                  <br />
                  <button className="news--btn">
                    <Link className="news--link" to="/news">
                      See More
                    </Link>
                  </button>
                </article>
              </SplideSlide>
            ))}
          </Splide>
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
