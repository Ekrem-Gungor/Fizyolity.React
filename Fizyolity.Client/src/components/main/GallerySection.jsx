import React from "react";
import galleryData from "@/data/galleryData";

export default function GallerySection() {
  return (
    <section className="py-16" id="gallery">
      <div className="max-w-6xl m-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryData.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
