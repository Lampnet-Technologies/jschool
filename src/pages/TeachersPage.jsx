import React from "react";
import teachers from "../components/TeachersData";
import Footer from "../components/Footer";
import '../css/pages.css';

export default function TeachersPage() {
  return (
    <div className="pages">
      <div className="teachers--page">
        <div className="teachers--page--content">
          <h1>Our Teachers</h1>
          <div className="teachers--page--details">
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
