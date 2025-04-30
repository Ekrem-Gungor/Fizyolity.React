import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slides from "@/data/sildeData";
import Head from "../defaultLayout/Head";

export default function CarouselSection() {
  return (
    <>
      <Head canonicalUrl="https://fizyolity.com.tr/#carousel" />
      <section className="py-16" id="carousel">
        <div className="max-w-4xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-6 md:p-12">
                  <p className="text-white text-lg md:text-xl mb-4">
                    {slide.content}
                  </p>
                  <h5 className="text-2xl font-bold text-white">
                    {slide.title}
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
