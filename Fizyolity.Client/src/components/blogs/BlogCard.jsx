import { Card, CardContent } from "@/components/ui/card";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCard = React.memo(({ blog }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card className="bg-white/80 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-400 ease-in-out">
      <div className="relative w-full h-48">
        {!isImageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
        )}
        <img
          src={blog.coverImage}
          alt={blog.title}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/img/blogs/placeholder.webp";
            setIsImageLoaded(true);
          }}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardContent className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h2>
        <p className="text-sm mb-2 text-muted-foreground">
          {new Date(blog.publishedDate).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {blog.author}
        </p>
        <p className="mb-4 text-sm text-zinc-700">{blog.excerpt}</p>
        <Link
          to={`/blog/details/${blog.slug}`}
          className="text-fizyolity hover:underline font-medium flex items-center"
        >
          Devamını oku <RiArrowRightLine className="ml-1" />
        </Link>

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
      </CardContent>
    </Card>
  );
});

export default BlogCard;
