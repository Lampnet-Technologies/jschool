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
import CallToAction from "../components/call-to-action/CallToAction";

export default function AboutPage() {
  useEffect(() => {
    AOS.init();
  });
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["About", "Teachers"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="pages">
        <Banner title="About JSchool" image={BannerImage} />
        <div className="jschool--container">
          <div className="jschool--content">
            <div className="about--jschool">
              <div className="line"></div>
              <h1>
                About <span ref={el} />
              </h1>
              <div
                className="jschool--header"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="jschool--body">
                  <h2>JSchool</h2>
                  <p>
                    Located in a safe and serene area of Opebi, Ikeja, our
                    modern facility is fitted to support all students in
                    developing learning and innovation skills, information media
                    and technology skills, life and career skills that prepare
                    them for a life of success. Students will learn in a
                    positive and fulfilling learning environment where children
                    learn and grow within a culture of support and where their
                    needs of order, security, love, belonging, competence,
                    personal power, freedom, and fun are met. The Court Hill
                    College is a continuation of The Kids' Court School's
                    12-year tradition of excellence in education provision. We
                    have gained mastery in the provision of the Montessori,
                    British, and Nigerian National curricula. We are proud to
                    have a 100% pass rate for all our students seeking entry
                    into primary or secondary schools across the globe since
                    2009. We can only get better. We have a strong academic
                    focus and our academic program is broad and challenging,
                    based on a rich, robust, rigorous, and relevant curriculum
                    that stimulates intellectual curiosity, a love of learning
                    and academic excellence. We offer international GCSEs, WAEC,
                    CAMBRIDGE CHECKPOINT EXAMINATIONS. Our co-curricular
                    programme is diverse and promotes all-round personal
                    development and a happy and healthy lifestyle. Our fully
                    fitted classrooms support learning in the 21st century. Our
                    teaching methodologies are child-centred yet cutting edge.
                    Our well-trained, professional, and committed local and
                    international faculty provide individualized support to
                    students both in and out of class. No student is left behind
                    in our school. We have spacious rooms including ICT suites,
                    science laboratories, Art rooms, Music rooms and libraries.
                    Our facility also houses our swimming pools, Tennis courts
                    and outdoor areas. The college will also house Makerspace
                    areas and Collaboration centres where the students get
                    firsthand experience in robotics, coding, as well as 3D
                    printing. All these give our students the opportunity to
                    express their skills and talents.
                  </p>
                </div>
                <div
                  className="jschool--img"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img src={RandomImage} className="img" alt="" />
                </div>
              </div>
              <div className="about--gallery">
                <Link className="link" to="/gallery">
                  See our school in picture
                </Link>
              </div>
            </div>

            <div className="jschool--history">
              <div className="jschool--history--content">
                <div className="line"></div>
                <h1>Our History</h1>
                <div className="history--body">
                  <div
                    className="origin"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3>Origin</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Pariatur, inventore suscipit? Perferendis sit quibusdam,
                      repudiandae deserunt voluptate voluptates perspiciatis
                      veniam iure alias esse voluptatum vero.
                    </p>
                  </div>
                  <div
                    className="campus"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h3>Campus</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Molestias vel laborum deleniti culpa nam aliquam itaque
                      quo voluptatem sit velit. Dolorum incidunt expedita
                      distinctio minus?
                    </p>
                  </div>
                  <div
                    className="success"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3>Success</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate quaerat, labore quia culpa dignissimos
                      accusantium possimus deserunt illo, reiciendis saepe
                      voluptas, architecto magnam distinctio libero!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="vision--bg">
              <div className="vision--overlay">
                <div
                  className="jchool--vision"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <h1>Our Vision</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quas aspernatur laudantium repudiandae dolore pariatur
                    dignissimos nam perferendis, earum voluptates minima
                    expedita eveniet possimus nihil itaque accusamus nesciunt
                    dicta beatae!
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <CallToAction />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
