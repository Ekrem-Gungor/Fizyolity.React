import { Card } from "@/components/ui/card";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Card className="flex flex-col items-center gap-4 text-center bg-white/70 border border-gray-200 p-6 rounded-xl shadow-md hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-500 ease-in-out">
      <div className="bg-fizyolity rounded-full">{service.icon}</div>
      <h4 className="text-lg font-semibold">{service.title}</h4>
      <Link
        to={`/blog/details/${service.slug}`}
        className="text-sm text-primary hover:underline flex items-center gap-1"
      >
        Hakkında Blog <RiArrowRightLine className="ml-1" />
      </Link>
    </Card>
  );
};

export default ServiceCard;
