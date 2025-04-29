import React from "react";
import { RiCalendarCheckLine, RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import eventsData from "@/data/eventsData";

export default function EventsSection() {
  return (
    <section className="py-16" id="events">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
          Etkinliklerimiz
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {eventsData.map((event, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-gray-200 p-6 rounded-xl shadow-md hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-300 easy-in-out"
            >
              <div className="flex items-center gap-2 mb-4">
                <RiCalendarCheckLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
              <p className="text-sm mb-4">{event.description}</p>
              <Link
                to={event.link}
                className="inline-flex font-semibold items-center hover:underline font-medium text-sm"
              >
                Ayrıntılar <RiArrowRightLine className="ml-1" size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/events"
            className="inline-block bg-fizyolity border-2 border-fizyolityhover text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-fizyolityhover hover:border-white/20 transition duration-400 easy-in-out"
          >
            Tüm Etkinlikler
          </Link>
        </div>
      </div>
    </section>
  );
}
