import servicesData from "@/data/servicesData";
import Head from "@/components/defaultLayout/Head";
import ServiceCard from "@/components/ourServices/serviceCard";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ServicesPage() {
  // Pagination için state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Apiden alacağımız data verisi ile değiştirilebilir.

  const totalItems = servicesData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Örnek toplam sayfa sayısı

  const currentBlogs = servicesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <Head title="Services" />

      <section className="py-10 mx-10 md:py-20 md:mx-20 ">
        <h2 className="text-2xl md:text-3xl font-bold m-6 text-center text-white/90">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mt-10 px-2 gap-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className="cursor-pointer border border-zinc-700 hover:border-zinc-900"
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      className="cursor-pointer bg-white/50"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className="cursor-pointer border border-zinc-700 hover:border-zinc-900"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm text-muted-foreground whitespace-nowrap self-end sm:self-center">
            {itemsPerPage} içerik / sayfa
          </p>
        </div>
      </section>
    </>
  );
}
