import React from "react";
import "./AdmissionOverview.css";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/images/Pupil-banner.svg";
import { FaArrowRight, FaEvernote } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import CallToAction from "../../components/call-to-action/CallToAction";
export default function AdmissionOverview() {
  return (
    <div>
      <div className="admissionOverview-container">
        <Banner image={BannerImage} title="Admission" />
        <div className="admissionOverview-content">
          <p className="banner-text">
            Choosing a school for your child is one of the most important
            decisions you can make and we understand how important it is to find
            the right one.
          </p>
          <div className="admissionOverview-left">
            <p>
              That is why we meet and talk to each and every child, so we can
              feel sure that they will flourish here and enjoy being a member of
              our happy and vibrant community!
            </p>
            <p>
              We warmly invite you to come and see what makes Court Hill College
              such a special place, and to be dazzled by the vast array of
              activities and opportunities which await your child.
            </p>
            <p>
              Open Days are an ideal opportunity to explore all that we have to
              offer as well as meet the individuals who make our school such a
              wonderful place to be - our pupils! They will give you a true
              insight into life at Court Hill College as they take you on a
              guided tour of our lovely campus. Our subject heads and senior
              staff will also be present to answer any specific questions you
              may have.
            </p>
            <p>
              In addition, we can arrange individual appointments which are
              tailored to your child's needs and their particular interests.
              Just contact the Admissions department and let us know the most
              convenient date and time for your visit and we will be happy to
              arrange this for you.
            </p>
            <p>
              We look forward to welcoming you to Court Hill College very soon
              and making sure that your admissions process experience is as
              smooth and straightforward as possible.
            </p>
          </div>
          <div className="admissionOverview-right">
            <div className="admissionOverview-steps">
              <p className="banner-text">3 key steps to join our school</p>
              <div className="admissionOverview-steps-content">
                <FaEvernote className="admissionOverview-icon"/>
                <p>Fill the application form</p>
              </div>
              <div className="admissionOverview-steps-content">
                <FaEvernote className="admissionOverview-icon"/>
                <p>Fill the application form</p>
              </div>
              <div className="admissionOverview-steps-content">
                <FaEvernote className="admissionOverview-icon"/>
                <p>Fill the application form</p>
              </div>
            </div>
            <Link to='/admission'>
              <button>Apply now</button>
            </Link>
          </div>
        </div>
        <br /><br /><br />
        <CallToAction
          about="About us"
          icon={<FaArrowRight />}
          tour="Take a virtual tour"
          contact="Contact us"
          apply="How to apply"
          news="News & events"
          pupil="Hear from our students"
        />
        <br /><br />
        <Footer />
      </div>
    </div>
  );
}
