"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
function BlogPagination({ currentPage, totalPages, onPageChange }) {
  // if the pages is single or less then one no pagiatnion is required
  if (totalPages <= 1) {
    return null;
  }

  const pages = [...Array(totalPages)].map((_, index) => index + 1);
  // console.log(pages);

  return (
    <div>
      {" "}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {/* {console.log(currentPage)} */}
            <PaginationPrevious
              className={currentPage === 1 ? "cursor-not-allowed" : ""}
              onClick={() => {
                if (currentPage === 1) return;
                onPageChange(currentPage - 1);
              }}
              href="#"
            />
          </PaginationItem>

          {pages.map((pageNumber, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={pageNumber === currentPage}
                onClick={() => {
                  console.log("you clicked on " + pageNumber);
                  onPageChange(pageNumber);
                }}
                href="#"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            {/* {console.log(currentPage, totalPages)} */}
            <PaginationNext
              onClick={() => {
                if (currentPage === totalPages) return;
                onPageChange(currentPage + 1);
              }}
              className={currentPage === totalPages ? "cursor-not-allowed" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default BlogPagination;
