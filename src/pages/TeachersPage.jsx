import React, { useEffect } from "react";
import teachers from "../components/TeachersData";
import Footer from "../components/Footer";
import '../css/pages.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeachersPage() {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div className="pages">
      <div className="teachers--page">
        <div className="teachers--page--content">
          <h1>Our Teachers</h1>
          <div className="teachers--page--details" data-aos="zoom-in"
     data-aos-duration="1500">
          {teachers.map((teacher) => (
            <div key={teacher.id}>
              <img src={teacher.img} className="img" />
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
