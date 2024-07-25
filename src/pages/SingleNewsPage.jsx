import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SingleNewsPage() {
  const [singleNewsPost, setSingleNewsPost] = useState(null);
  const [posts, setPosts] = useState([]); // Added state for posts
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setSingleNewsPost(data[0]))
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          mainImage {
            asset -> {
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (singleNewsPost === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleNews pages">
      <div className="singleNews--content">
        <section>
          <h1>{singleNewsPost.title}</h1>
          {singleNewsPost.mainImage && singleNewsPost.mainImage.asset.url && (
            <img
              className="img"
              src={singleNewsPost.mainImage.asset.url}
              alt={singleNewsPost.mainImage.alt}
            />
          )}
          <h3>Onward</h3>
          <div className="body">
            <BlockContent
              blocks={singleNewsPost.body}
              projectId="qdccjb4j"
              dataset="production"
            />
          </div>
          <Link to="/news" className="news--link">
            <FaArrowLeft /> Back
          </Link>
        </section>
        <section className="News--Events">
          <div className="news--container">
            <h1 className="news--title">Recent News</h1>
            <br />
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                autoplay: true,
                pauseOnHover: false,
                gap: "1rem",
                arrows: false,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                  1024: {
                    perPage: 2,
                  },
                },
              }}
              aria-label="School News and Events"
            >
              {posts.map((post) => (
                <SplideSlide key={post.slug.current}>
                  <article>
                    <div className="article--img">
                      <img
                        src={post.mainImage.asset.url}
                        className="img"
                        alt={post.title}
                      />
                    </div>
                    <br />
                    <h2>{post.title}</h2>
                    <Link
                      className="news--link"
                      to={`/news/${post.slug.current}`}
                    >
                      See More <FaArrowRight />
                    </Link>
                  </article>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </div>
    </div>
  );
}
