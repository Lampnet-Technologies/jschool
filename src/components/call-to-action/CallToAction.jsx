import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

export default function CallToAction(props) {
  return (
    <div>
      <div className="call-to-action">
        <h2>Find Out More</h2>
        <div className="call-to-action-content">
          <div className="call-to-action-links">
            <Link to="/about" className="link">
              <div className="apply-action-btn">
                <p>{props.about}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/gallery" className="link">
              <div className="apply-action-btn four">
                <p>{props.tour}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/contact" className="link">
              <div className="apply-action-btn three">
                <p>{props.contact}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/admission" className="link">
              <div className="apply-action-btn two">
                <p>{props.apply}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/news" className="link">
              <div className="apply-action-btn four">
                <p>{props.news}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/teacher" className="link">
              <div className="apply-action-btn two">
                <p>{props.teacher}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>
          <div className="call-to-action-links">
            <Link to="/pupil" className="link">
              <div className="apply-action-btn">
                <p>{props.pupil}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>
          <div className="call-to-action-links">
            <Link to="/support" className="link">
              <div className="apply-action-btn three">
                <p>{props.support}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>

          <div className="call-to-action-links">
            <Link to="/overview" className="link">
              <div className="apply-action-btn four">
                <p>{props.admissionOverView}</p>
                <div className="icon">{props.icon}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
