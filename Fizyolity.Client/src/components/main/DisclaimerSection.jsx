import React from "react";
import Head from "../defaultLayout/Head";

export default function DisclaimerSection() {
  return (
    <>
      <Head canonicalUrl="https://fizyolity.com.tr/#disclaimer" />
      <section className="py-16" id="disclaimer">
        <div className="py-6 my-6 bg-white/40 border-t-4 border-b-4 border-black/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Yasal Uyarı
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Sitemizin içeriği konuyla ilgili bilgi sahibi olmak isteyenlere
              yönelik hazırlanmıştır. Sitede bulunan yazılar herhangi bir teşhis
              veya tedavi önerisi amacı taşımaz. Sadece sitedeki bilgilerden
              yola çıkarak tedavi veya teşhis yapılmamalıdır. Hiçbir yazı,
              online görüşme veya konuşma, birebir muayene ve detaylı hikaye ile
              birlikte kararlaştırılan tedavi ve teşhisten güçlü değildir.
            </p>
            <p className="text-gray-800 font-semibold text-base md:text-lg leading-relaxed">
              Burada yer alan yazıların amacı, hastaların bilinçlendirilerek
              tedaviye aktif katılımlarını sağlamaktır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
