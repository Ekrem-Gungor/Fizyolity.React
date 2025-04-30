import React from "react";
import Head from "../defaultLayout/Head";

const videos = [
  {
    src: "https://www.youtube.com/embed/E7Dza-nVZv4?rel=0&enablejsapi=1&modestbranding=1",
    title: "Low Back Pain Exercises",
    description: "Bel Ağrısı için Egzersizler",
  },
  {
    src: "https://www.youtube.com/embed/QYGQFXsKrso?rel=0&enablejsapi=1&modestbranding=1",
    title: "Neck and Back Pain Exercises",
    description: "Boyun ve Sırt Ağrısı İçin Egzersizler",
  },
];

export default function VideosSection() {
  return (
    <>
      <Head canonicalUrl="https://fizyolity.com.tr/#youtube" />
      <section className="py-16" id="youtube">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white/90">
            Ekibimizin Videoları
          </h2>

          <div className="text-center mb-8">
            <a
              href="https://www.youtube.com/channel/UCevXYjAKGspDPJcuQlCJg_w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 transition font-semibold"
            >
              Fizyolity YouTube
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4 bg-white/90 rounded-xl">
                <div className="aspect-video">
                  <iframe
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full rounded-t-xl shadow"
                  />
                </div>
                <p className="text-center text-gray-700 font-medium">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
