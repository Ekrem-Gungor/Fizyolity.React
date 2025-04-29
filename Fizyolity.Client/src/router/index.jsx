import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutUsSection from "../components/main/AboutUsSection";
import HomePage from "../pages/HomePage";
import ServicesSection from "@/components/main/ServicesSection";
import BlogsSection from "@/components/main/BlogsSection";
import GallerySection from "@/components/main/GallerySection";
import EventsSection from "@/components/main/EventsSection";
import OurTeamSection from "@/components/main/OurTeamSection";

export const ROUTES = {
  HOME: "/",
  ABOUT: "about",
  SERVICES: "services",
  BLOGS: "blogs",
  GALLERY: "gallery",
  EVENTS: "events",
  OURTEAM: "ourteam",
  CONTACT: "contact",
  YOUTUBE: "https://www.youtube.com/channel/UCevXYjAKGspDPJcuQlCJg_w",
  GOOGLEMAP: "https://maps.app.goo.gl/QsoMq5tb2dzawHjRA",
  PHONENO: "5339289555",
  MAIL: "info@fizyolity.com.tr",
  FIZYOLITYINSTAGRAM: "fizyolity",
  DEVELOPERINSTAGRAM: "ekremgungor",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsSection />,
      },
      {
        path: "services",
        element: <ServicesSection />,
      },
      {
        path: "blogs",
        element: <BlogsSection />,
      },
      {
        path: "gallery",
        element: <GallerySection />,
      },
      {
        path: "events",
        element: <EventsSection />,
      },
    ],
  },
]);

export default router;
