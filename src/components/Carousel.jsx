import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SliderImage1 from "../assets/images/Pupil-banner.svg";
import SliderImage2 from "../assets/images/37.jpg";
import SliderImage3 from "../assets/images/30.jpg";
import SliderImage4 from "../assets/images/33.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const slideTexts = [
  "Welcome to JSchool...",
  "Explore Opportunities...",
  "Innovative Learning...",
  "Experienced Teachers...",
];

const Slider = () => {
  const splideRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;

      const updateTypedText = (newIndex) => {
        const textElement =
          splide.Components.Slides.getAt(newIndex).slide.querySelector(
            ".typed-text"
          );
        if (textElement) {
          if (typedRef.current) {
            typedRef.current.destroy();
          }
          typedRef.current = new Typed(textElement, {
            strings: [slideTexts[newIndex]],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
          });
        }
      };

      splide.on("move", (newIndex, prevIndex) => {
        const prevSlide = splide.Components.Slides.getAt(prevIndex).slide;
        const newSlide = splide.Components.Slides.getAt(newIndex).slide;

        prevSlide.querySelector("img").style.transform = "scale(1)";
        newSlide.querySelector("img").style.transform = "scale(1.2)";
      });

      splide.on("moved", () => {
        updateTypedText(splide.index);
      });

      splide.on("mounted", () => {
        updateTypedText(splide.index);
      });
    }
  }, []);

  return (
    <div className="slider--page">
      <div className="slider--content">
        <Splide
          ref={splideRef}
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 6000,
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 2000,
            arrows: false,
            pagination: false,
            classes: {
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
          }}
        >
          {[SliderImage4, SliderImage1, SliderImage3, SliderImage2].map(
            (image, index) => (
              <SplideSlide key={index}>
                <div className="slide-image">
                  <img src={image} alt={`Slider image ${index + 1}`} />
                </div>
                <div className="slider--content">
                  <div className="slide-header">
                    <div
                      className="slide-text"
                      data-aos="fade-out"
                      data-aos-duration="1500"
                    >
                      <h2>JSchool College</h2>
                      <p>
                        <span className="typed-text" />
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            )
          )}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
