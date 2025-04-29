import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Holistik Yaklaşım",
    content:
      "Alanında bir ilk yaratarak, ekip olarak bireylerin fiziksel, beslenme ve ruhsal ihtiyaçlarına odaklanarak, bütünsel iyiliklerini desteklemeyi amaçlarız.",
  },
  {
    title: "Sağlıklı Yaşam",
    content:
      "Fizyoterapistlerimiz, diyetisyenimiz ve psikoloğumuz ile işbirliği içinde, bilimsel yaklaşımlarla bireylerin sağlıklı yaşam hedeflerine ulaşmalarına katkıda bulunmayı taahhüt ediyoruz.",
  },
  {
    title: "Bilimsel Yaklaşım",
    content:
      "Bütüncül yaklaşımlarla, deneyimli fizyoterapistlerimiz, diyetisyenimiz ve psikoloğumuz bilimsel yöntemlerle bireylere her açıdan yaklaşarak sağlıklarını en üst düzeye çıkarmayı hedefler.",
  },
];

export default function CarouselSection() {
  return (
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
                <h5 className="text-2xl font-bold text-white">{slide.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
