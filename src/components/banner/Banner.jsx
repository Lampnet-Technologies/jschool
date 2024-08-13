import React from "react";
import './Banner.css'
// import BannerImage from '../../assets/images/37.jpg'
export default function Banner(props) {
  return (
    <div>
      <div className="banner-container">
        <img src={props.image} alt={props.title} />
        <div className="banner-content">
          <h1>{props.title}</h1>
        </div>
        <div className="banner-play">
          {props.play}
        </div>
      </div>
    </div>
  );
}
