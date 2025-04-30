import Head from "@/components/defaultLayout/Head";
import blogsData from "@/data/blogsData";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";

export default function BlogsPage() {
  return (
    <>
      <Head title="Blogs" />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center m-10 text-white/90">
          Blog Yazıları
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/80 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-400 ease-in-out"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/img/blogs/placeholder.webp";
                }}
                className="w-full h-48 object-cover will-change-loading"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm mb-2">
                  {new Date(blog.publishedDate).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {blog.author}
                </p>
                <p className="mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/details/${blog.slug}`}
                  className="text-fizyolity hover:underline font-medium flex items-center"
                >
                  Devamını oku <RiArrowRightLine className="ml-1" />
                </Link>
                {/* Etiketler */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-fizyolity text-black/60 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
