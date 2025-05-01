import Head from "@/components/defaultLayout/Head";
import blogsData from "@/data/blogsData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import BlogCard from "@/components/blogs/BlogCard";

export default function BlogsPage() {
  // Pagination için state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Apiden alacağımız data verisi ile değiştirilebilir.

  const totalItems = blogsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Örnek toplam sayfa sayısı

  const currentBlogs = blogsData.slice(
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
      <Head title="Blogs" />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center m-10 text-white/90">
          Blog Yazıları
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
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
