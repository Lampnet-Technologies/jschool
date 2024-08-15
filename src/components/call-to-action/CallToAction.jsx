import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction(props) {
  const renderLink = (path, label, className) => {
    return label ? (
      <div className="call-to-action-links">
        <Link to={path} className="link">
          <div className={`apply-action-btn ${className}`}>
            <p>{label}</p>
            <div className="icon">{props.icon}</div>
          </div>
        </Link>
      </div>
    ) : null;
  };

  return (
    <div>
      <div className="call-to-action">
        <h2>Find Out More</h2>
        <div className="call-to-action-content">
          {renderLink("/about", props.about, "")}
          {renderLink("/gallery", props.tour, "four")}
          {renderLink("/contact", props.contact, "three")}
          {renderLink("/admission", props.apply, "two")}
          {renderLink("/news", props.news, "four")}
          {renderLink("/teacher", props.teacher, "two")}
          {renderLink("/pupil", props.pupil, "")}
          {renderLink("/support", props.support, "three")}
          {renderLink("/overview", props.admissionOverView, "four")}
        </div>
      </div>
    </div>
  );
}
