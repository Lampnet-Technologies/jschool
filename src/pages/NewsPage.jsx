import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import client from "../client";
import { Link } from "react-router-dom";

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

  return (
    <div className="pages">
      <div className="news--container">
        <h1 className="news--title">School News and Events</h1>
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
              </div>
              <br />
              <h2>{post.title}</h2>
              <button className="news--btn">
                <Link className="news--link" to={`/news/${post.slug.current}`}>
                  See More
                </Link>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
