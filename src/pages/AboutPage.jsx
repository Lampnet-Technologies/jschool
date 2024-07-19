import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../css/pages.css";
import RandomImage from "../assets/images/30.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div>
      <div className="pages">
        <div className="jschool--container">
          <div className="jschool--content">
            <div className="about--jschool">
              <h1>About JSchool</h1>
              <div className="jschool--header" data-aos="fade-right"
     data-aos-duration="1500">
                <div className="jschool--body">
                  <div className="line"></div>
                  <h2>JSchool</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores cum distinctio illo sit ipsam explicabo minima
                    dolores facilis eveniet, possimus corrupti reprehenderit
                    sunt expedita velit alias dolore ipsa repellat dignissimos
                    necessitatibus. Laborum recusandae amet modi quidem. Beatae
                    incidunt odio sapiente!
                  </p>
                </div>
                <div className="jschool--img" data-aos="fade-left"
     data-aos-duration="1500">
                  <img src={RandomImage} className="img" alt="" />
                </div>
              </div>
            </div>

            <div className="jschool--history">
              <div className="jschool--history--content">
                <div className="line"></div>
                <h1>Our History</h1>
                <div className="history--body">
                  <div className="origin">
                  <h3>Origin</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur, inventore suscipit? Perferendis sit quibusdam,
                    repudiandae deserunt voluptate voluptates perspiciatis
                    veniam iure alias esse voluptatum vero.
                  </p>
                  </div>
                  <div className="campus">
                  <h3>Campus</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias vel laborum deleniti culpa nam aliquam itaque quo
                    voluptatem sit velit. Dolorum incidunt expedita distinctio
                    minus?
                  </p>
                  </div>
                  <div className="success">
                  <h3>Success</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quaerat, labore quia culpa dignissimos accusantium
                    possimus deserunt illo, reiciendis saepe voluptas,
                    architecto magnam distinctio libero!
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="jchool--vision">
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                quas aspernatur laudantium repudiandae dolore pariatur
                dignissimos nam perferendis, earum voluptates minima expedita
                eveniet possimus nihil itaque accusamus nesciunt dicta beatae!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
