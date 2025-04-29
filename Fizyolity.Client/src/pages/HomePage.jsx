import Head from "@/components/defaultLayout/Head";
import AboutUsSection from "@/components/main/AboutUsSection";
import BlogSection from "@/components/main/BlogsSection";
import CarouselSection from "@/components/main/CarouselSection";
import DisclaimerSection from "@/components/main/DisclaimerSection";
import EventsSection from "@/components/main/EventsSection";
import GallerySection from "@/components/main/GallerySection";
import GoogleMapSection from "@/components/main/GoogleMapSection";
import OurTeamSection from "@/components/main/OurTeamSection";
import ServicesSection from "@/components/main/ServicesSection";
import VideosSection from "@/components/main/VideosSection";

export default function HomePage() {
  return (
    <>
      <Head
        title="Anasayfa"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fizyolity",
          url: "https://fizyolity.com.tr",
          logo: "https://fizyolity.com.tr/Logo.webp",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+90-533-928-9555",
            contactType: "Customer Service",
          },
          sameAs: ["https://www.instagram.com/fizyolity/"],
        }}
      />
      <AboutUsSection />
      <CarouselSection />
      <ServicesSection />
      <VideosSection />
      <BlogSection />
      <GallerySection />
      <EventsSection />
      <OurTeamSection />
      <GoogleMapSection />
      <DisclaimerSection />
    </>
  );
}
