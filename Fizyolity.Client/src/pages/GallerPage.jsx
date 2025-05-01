import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const images = [
  "galeri-1.webp",
  "galeri-2.webp",
  "galeri-3.webp",
  "galeri-4.webp",
  "galeri-5.webp",
  "galeri-6.webp",
  "galeri-8.webp",
  "galeri-9.webp",
  "galeri-10.webp",
  "galeri-11.webp",
  "galeri-12.webp",
  "galeri-13.webp",
  "galeri-14.webp",
  "sari-kedi.webp",
  "beyaz-kedi.webp",
  "ekip-fotosu.webp",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-white/90 mb-10">
        Galeri
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer group overflow-hidden rounded-xl"
            onClick={() => setSelectedImage(`/img/gallery/${img}`)}
          >
            <img
              src={`/img/gallery/${img}`}
              alt={`Galeri görseli ${index + 1}`}
              className="object-cover w-full h-48 group-hover:scale-105 will-change-transform transition duration-300 ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="p-0 bg-transparent border-0 shadow-none max-w-[100vw] max-h-[100vh]">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white z-50"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Seçilen görsel"
            className="max-w-full max-h-screen rounded-lg m-auto"
            decoding="async"
            loading="lazy"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
