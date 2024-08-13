import React from "react";
import "./Pupil.css";
import Banner from "../../components/banner/Banner";
import BannerImage from "../../assets/images/Pupil-banner.svg";
import CallToAction from "../../components/call-to-action/CallToAction";
import Footer from "../../components/Footer";
export default function Pupil() {
  return (
    <div>
      <div className="pupil-container">
        <Banner image={BannerImage} title="Hear from our Pupil" />
        <div className="pupil-content">
          <p className="banner-text">
            Court Hill College offers a world of opportunity for talented girls
            and boys who wish to contribute fully to our happy and purposeful
            community.
          </p>
          <div className="pupil-info">
            <div className="pupil-left">
              <img src={BannerImage} alt="student umage" />
              <div className="student-name">
                <p>John Mary</p>
                <p>Head Girl</p>
              </div>
            </div>
            <div className="pupil-right">
              <p>
                We are academically selective and we expect our pupils to
                achieve excellent results ipublic examinations. In addition to
                providing intellectual rigors and challenge, we provide a
                holistic education that balances academic achievement with the
                development of character, resilience and leadership. All of our
                boys and girls are strongly encouraged to take full advantage of
                the widest range of co-curricular activities on offer at Court
                Hill College. Participation in these activities stretches the
                pupils; it promotes a sense of social responsibility, enhances
                team spirit and engenders confidence.
              </p>
              <p>
                Our goal is for our young men and women to leave Court Hill
                College fully equipped with the life skills and the academic
                credentials necessary for them to flourish in a competitive
                global employment market.
              </p>
              <p>
                We also hope that they leave the school fulfilled, proud of
                their achievements and full of compassion for others. If our
                ethos resonates withyou, please do come and visit Court Hill
                College. It would be our pleasure to show you around.
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        <CallToAction/>
        <br /><br />
      <Footer/>
      </div>
    </div>
  );
}
