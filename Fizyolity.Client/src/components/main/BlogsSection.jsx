import React from "react";
import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import blogsData from "@/data/blogsData";

export default function BlogsSection() {
  return (
    <section className="py-16" id="blogs">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
          Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="bg-white/70 border border-gray-200 p-6 rounded-xl shadow-md hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-300 easy-in-out"
            >
              <div className="mb-4">{blog.iconClass}</div>
              <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
              <p className="mb-4 text-sm">{blog.description}</p>
              <Link
                to={blog.href}
                className="font-medium inline-flex items-center hover:underline"
              >
                Daha fazla <RiArrowRightLine size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blogs"
            className="inline-block bg-fizyolity border-2 border-fizyolityhover text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-fizyolityhover hover:border-white/20 transition duration-400 easy-in-out"
          >
            Tüm Bloglar
          </Link>
        </div>
      </div>
    </section>
  );
}
