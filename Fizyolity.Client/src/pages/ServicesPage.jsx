import servicesData from "@/data/servicesData";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import Head from "@/components/defaultLayout/Head";

export default function ServicesPage() {
  return (
    <>
      <Head title="Services" />

      <section className="py-10 mx-10 md:py-20 md:mx-20 ">
        <h2 className="text-2xl md:text-3xl font-bold m-6 text-center text-white/90">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col items-center gap-4 text-center bg-white/70 border border-gray-200 p-6 rounded-xl shadow-md hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-500 ease-in-out"
            >
              <div className="bg-fizyolity rounded-full">{item.icon}</div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <Link
                to={item.blogLink}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Hakkında Blog <RiArrowRightLine className="ml-1" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
