import { useParams, useNavigate } from "react-router-dom";
import eventsData from "@/data/eventsData";
import { RiArrowLeftLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";
import { X } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function EventDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const event = eventsData.find((e) => e.slug === slug);
  if (!event) {
    return (
      <div className="text-center mt-20 bg-white/80">
        <h2 className="text-2xl font-semibold text-red-500">
          Etkinlik bulunamadı.
        </h2>
        <button
          onClick={() => navigate("/events")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Etkinliklere geri dön
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10 bg-white/60">
        <img
          src={event.coverImage}
          alt={event.title}
          className="w-full h-96 object-cover rounded-xl mb-6 shadow will-change-loading"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/img/blogs/placeholder.webp";
          }}
          loading="lazy"
          decoding="async"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
        <p className="text-md text-gray-500 mb-2">
          <span className="font-semibold">Etkinlik Konumu : </span>
          {event.location}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          <span className="font-semibold">Etkinlik tarihi : </span>
          {new Date(event.eventSartDate).toLocaleDateString("tr-TR", {
            day: "numeric",
          })}{" "}
          ~{" "}
          {new Date(event.eventEndDate).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="text-gray-800 leading-relaxed space-y-4">
          {event.content}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 mt-4 gap-4">
          {event.contentImage.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(`/img/ourEvents/${img}`)}
            >
              <img
                src={`/img/ourEvents${img}`}
                alt={`Galeri görseli ${index + 1}`}
                className="object-cover w-full h-48 group-hover:scale-105 will-change-transform transition duration-300 ease-in-out"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 mt-4 gap-4">
          {event.contentVideo.map((vid, index) => (
            <div
              key={index}
              className="cursor-pointer group overflow-hidden rounded-xl"
            >
              <video controls width="280" preload="metadata">
                <source
                  src={`/img/ourEvents${vid}`}
                  alt={`Galeri video ${index + 1}`}
                  type="video/webm"
                  loading="lazy"
                  decoding="async"
                />
              </video>
            </div>
          ))}
        </div>

        {/* Geri Dön */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/events")}
            className="text-fizyolity hover:underline flex items-center"
          >
            <RiArrowLeftLine className="mr-1" /> Etkinliklere Dön
          </button>
        </div>
        {console.log(selectedImage)}
        {/* Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) setSelectedImage(null);
          }}
        >
          <DialogContent className="p-0 bg-transparent border-0 shadow-none max-w-[100vw] max-h-[100vh]">
            <DialogHeader>
              <DialogTitle>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white z-50"
                >
                  <X size={28} />
                </button>
              </DialogTitle>
            </DialogHeader>
            <img
              src={selectedImage}
              alt="Seçilen görsel"
              className="max-w-full max-h-screen rounded-lg m-auto"
              decoding="async"
              loading="lazy"
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
