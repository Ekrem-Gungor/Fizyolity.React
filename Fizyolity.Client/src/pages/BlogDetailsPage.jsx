import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogsData from "@/data/blogsData";
import { RiArrowLeftLine } from "react-icons/ri";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-red-500">
          Blog bulunamadı.
        </h2>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Bloglara geri dön
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white/60">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-6 shadow will-change-loading"
        onError={(e) => {
          console.log(
            `Resim yüklenemedi (${blog.coverImage}), placeholder gösterilecek!`
          );
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/img/blogs/placeholder.webp";
        }}
        loading="lazy"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        {new Date(blog.publishedDate).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {blog.author}
      </p>

      <div className="text-gray-800 leading-relaxed space-y-4">
        {blog.content}
      </div>

      {/* Etiketler */}
      <div className="mt-8 flex flex-wrap gap-2">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-fizyolity text-black/60 text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Geri Dön */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/blogs")}
          className="text-fizyolity hover:underline flex items-center"
        >
          <RiArrowLeftLine className="mr-1" /> Bloglara Dön
        </button>
      </div>
    </div>
  );
}
