import Head from "../defaultLayout/Head";

export default function AboutUsSection() {
  return (
    <>
      <Head canonicalUrl="https://fizyolity.com.tr/#about" />
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h4 className="text-3xl md:text-4xl font-bold text-gray-200">
              Biz Kimiz ?
            </h4>
            <p className="text-gray-100 leading-relaxed">
              2021 yılında danışanlarımıza bütüncül ve uzman bir sağlık hizmeti
              sunmak amacıyla kurulmuştur. Amacımız, bireylerin en iyi hallerine
              ulaşmalarını sağlamak için sağlığın her alanında profesyonel
              destek sunmaktır.
            </p>
            <p className="text-gray-100 leading-relaxed">
              <strong>Mottomuz:</strong> "Herkes için, her şey için yetenek." Bu
              ilke doğrultusunda, ağrısız ve kaliteli bir yaşam sürmenizi
              sağlayacak becerileri yeniden kazanmanıza yardımcı olmayı
              hedefliyoruz.
            </p>
            <p className="text-gray-100 leading-relaxed">
              <strong>Ekibimiz:</strong> Merkezimizde, alanında uzman
              fizyoterapistler, diyetisyenler ve psikologlardan oluşan bir ekip
              görev yapmaktadır. Sadece sedanter bireyler için değil, aynı
              zamanda amatör ve profesyonel sporcuların performanslarını en üst
              düzeye çıkarmaları için de kapsamlı destek sunmaktayız.
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center leading-tight">
              <span className="stroke-white">Fizyolity</span> Fizyoterapi ve
              Danışmanlık Merkezi
            </h1>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="/img/gallery/ekip-fotosu.webp"
              alt="Ekibimiz"
              loading="lazy"
              className="max-w-full h-auto mx-auto relative z-10 rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
