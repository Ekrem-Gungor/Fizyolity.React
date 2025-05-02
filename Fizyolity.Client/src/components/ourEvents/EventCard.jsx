import { Card, CardContent } from "@/components/ui/card";
import { RiArrowRightLine, RiCalendarCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const EventCard = ({ event }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Card className="bg-white/80 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-400 ease-in-out">
      <div className="relative w-full h-48">
        {!isImageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
        )}
        <img
          src={event.coverImage}
          alt={event.title}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/img/blogs/placeholder.webp";
            setIsImageLoaded(true);
          }}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardContent className="p-5">
        <h4 className="text-lg font-semibold">{event.title}</h4>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Etkinlik Konumu : </span>
          {event.location}
        </p>
        <p className="text-xs text-gray-500 mb-4">
          <span className="font-semibold">Etkinlik tarihi : </span>
          {event.eventSartDate && event.eventEndDate ? (
            <>
              {new Date(event.eventSartDate).toLocaleDateString("tr-TR", {
                day: "numeric",
              })}{" "}
              /{" "}
              {new Date(event.eventEndDate).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </>
          ) : (
            " "
          )}
        </p>

        <p className="mb-4 text-sm text-zinc-700">{event.excerpt}</p>
        <Link
          to={`/event/details/${event.slug}`}
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          Daha Fazla <RiArrowRightLine className="ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default EventCard;
