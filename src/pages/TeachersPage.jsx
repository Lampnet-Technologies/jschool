import React, { useEffect } from "react";
import teachers from "../components/TeachersData";
import Footer from "../components/Footer";
import "../css/pages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";


export default function TeachersPage() {

  useEffect(() => {
    AOS.init();
  }, []);
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['About', 'Teachers'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div className="pages">
      <div className="teachers--page">
        <div className="teachers--page--content">
          <h1>Our <span ref={el}/></h1>
          <div
            className="teachers--page--details"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {teachers.map((teacher) => (
              <div key={teacher.id}>
                <img src={teacher.img} alt={teacher.title} className="img" />
                <h3>{teacher.name}</h3>
                <p>{teacher.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
