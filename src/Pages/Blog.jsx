import React from "react";
import bgimage from "../assets/bg_1.jpg";
import data from "../Json Data/Blog.json";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="h-[40vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,0.8)), url(${bgimage})`,
        }}
      >
        <h1 className="text-4xl font-bold text-white cursor-pointer">
          Blog Page
        </h1>
      </div>

      {/* BLOG CONTENT */}
      <div className="container min-h-screen mx-auto mt-8 pb-12">
        <ul className="lg:w-[80%] w-[90%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.posts.map((post, index) => (
            <li
              key={index}
              className="group shadow shadow-gray-300 hover:shadow-lg rounded-md border border-gray-200 hover:border-fuchsia-500 cursor-pointer transition-all duration-200 overflow-hidden bg-white"
            >
              {/* IMAGE */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt="blog"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* CONTENT */}
              <div className="px-3 py-3">
                <p className="text-gray-500 text-sm font-semibold">
                  {post.date}
                </p>
                <p className="text-black mt-2 text-sm">{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Blog;
