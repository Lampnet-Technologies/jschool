import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div>
      <div className="call-to-action">
        <h2>Find Out More</h2>
        <div className="call-to-action-content">
          <div className="call-to-action-links">
            <Link to="/admission" className="link">
              <div className="apply-action-btn">
                <p>How to Apply</p>
                <FaChevronRight />
              </div>
            </Link>

            <Link to="/gallery" className="link">
              <div className="apply-action-btn two">
                <p>Take a Tour</p>
                <FaChevronRight />
              </div>
            </Link>

            <Link to="/news" className="link">
              <div className="apply-action-btn three">
                <p>Read Reviews</p>
                <FaChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
