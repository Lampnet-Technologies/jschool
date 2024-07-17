import React from "react";
import gallery from "../components/GalleryData";
import Footer from "../components/Footer";
import "../css/pages.css";

export default function Gallery() {
  return (
    <div className="pages">
      <div className="gallery--page">
        <div className="gallery--page--content">
          <h1>School's Gallery</h1>
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
