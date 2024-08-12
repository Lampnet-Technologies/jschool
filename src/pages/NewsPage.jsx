import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import client from "../client";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Footer from "../components/Footer";
import BlockContent from "@sanity/block-content-to-react";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../components/banner/Banner";
import BannerImage from '../assets/images/37.jpg'

export default function NewsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init();
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['News and Events', 'Blog'],
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
       <Banner title= "JSchool News" image={BannerImage} />
      <div className="news--container">
        <h1 className="news--title">School  <span ref={el} /></h1>
        <br />
        <div className="news">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <div className="article--img">
                <img
                  src={post.mainImage.asset.url}
                  className="img"
                  alt={post.title}
                />
                 <div className="body">
                    <BlockContent
                      blocks={post.body}
                      projectId="qdccjb4j"
                      dataset="production"
                    />
                  </div>
              </div>
              <br />
              <h2>{post.title}</h2>
                <Link className="news--link" to={`/news/${post.slug.current}`}>
                  See More <FaArrowRight/>
                </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
