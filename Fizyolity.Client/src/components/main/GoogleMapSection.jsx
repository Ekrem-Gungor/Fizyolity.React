import React from "react";
import Head from "../defaultLayout/Head";

export default function GoogleMapSection() {
  return (
    <>
      <Head canonicalUrl="https://fizyolity.com.tr/#contact" />
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white/90 mb-8">
            Bizi mi arıyorsun?
          </h2>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.7365490670622!2d29.087348549685007!3d40.98147048450314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac77103f6e4a9%3A0x4004321b10e9523a!2sFizyolity%20Klinik!5e0!3m2!1sen!2str!4v1725370529712!5m2!1sen!2str"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
