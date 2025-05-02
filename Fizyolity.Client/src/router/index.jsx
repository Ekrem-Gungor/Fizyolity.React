import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutUsSection from "../components/main/AboutUsSection";
import HomePage from "../pages/HomePage";
import GallerySection from "@/components/main/GallerySection";
import EventsSection from "@/components/main/EventsSection";
import ServicesPage from "@/pages/ServicesPage";
import BlogsPage from "@/pages/BlogsPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import GalleryPage from "@/pages/GallerPage";
import EventsPage from "@/pages/EventsPage";
import EventDetailsPage from "@/pages/EventDetailsPage";

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
        element: <ServicesPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blog/details/:slug",
        element: <BlogDetailsPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "event/details/:slug",
        element: <EventDetailsPage />,
      },
    ],
  },
]);

export default router;
