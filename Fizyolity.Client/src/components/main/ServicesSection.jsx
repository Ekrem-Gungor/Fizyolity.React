import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import servicesData from "@/data/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-16" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white/90">
          Hizmetlerimiz
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 border border-gray-200 p-6 rounded-xl shadow-md hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-300 easy-in-out"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className=" mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Hakkında Blog <RiArrowRightLine className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block bg-fizyolity border-2 border-fizyolityhover text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-fizyolityhover hover:border-white/20 transition duration-400 easy-in-out"
          >
            Tüm Hizmetlerimiz
          </Link>
        </div>
      </div>
    </section>
  );
}
