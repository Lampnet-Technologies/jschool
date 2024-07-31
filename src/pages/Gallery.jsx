import React, { useEffect, useRef } from "react";
import gallery from "../components/GalleryData";
import Footer from "../components/Footer";
import "../css/pages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

export default function Gallery() {
 useEffect(()=>{
  AOS.init()
 })


 const el = useRef(null);
 useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ["Gallery", "Teachers"],
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
      <div className="gallery--page">
        <div className="gallery--page--content">
          <h1>School's <span ref={el} /></h1>
          <div className="gallery--page--details">
            {gallery.map((gallery) => (
              <div key={gallery.id}>
                <div className="gallery--img">
                <img src={gallery.img} className="img" />
                </div>
                <p>{gallery.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
