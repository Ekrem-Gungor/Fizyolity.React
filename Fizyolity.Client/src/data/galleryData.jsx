import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryData = [
  {
    src: `${import.meta.env.BASE_URL}img/body/gallery/galeri-2.webp`,
    alt: "Fizyolity Image 1",
    label: "Fizyolity",
  },
  {
    src: `${import.meta.env.BASE_URL}img/body/gallery/galeri-3.webp`,
    alt: "Fizyolity Image 2",
    label: "Fizyolity",
  },
  {
    src: `${import.meta.env.BASE_URL}img/body/gallery/galeri-4.webp`,
    alt: "Fizyolity Image 3",
    label: (
      <Link
        to="/gallery"
        className="inline-flex items-center gap-1 text-fizyolityhover hover:underline"
      >
        Daha fazla <ArrowRight size={16} />
      </Link>
    ),
  },
];

export default galleryData;
