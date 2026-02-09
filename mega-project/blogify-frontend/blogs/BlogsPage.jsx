"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./blogSlice";
import { CircleX } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import BlogCard from "@/components/BlogCard";

import BlogPagination from "./BlogPagination";

function BlogsPage() {
  const disptach = useDispatch();
  const { blogs, loading, error, pagination } = useSelector(
    (state) => state.blogs
  );

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(pagination.pageCount);
  const [pageSize, setPageSize] = useState(pagination.pageSize);
  const [totalElements, setTotalElements] = useState(pagination.total);

  function pageChange(page) {
    setPage(page);
  }

  useEffect(() => {
    if (pagination) {
      setTotalPages(pagination.pageCount);
      setPageSize(pagination.pageSize);
      setTotalElements(pagination.total);
      console.log("pagination data loaded");
      console.log(pagination);
    }
  }, [pagination]);

  useEffect(() => {
    async function loadData() {
      await disptach(
        fetchBlogs({ page: page, pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE })
      ).unwrap();
    }
    loadData();
  }, [disptach, page]);

  if (loading)
    return (
      <div className="p-10 max-w-5xl mx-auto flex items-center justify-center flex-col gap-2">
        {/* <Spinner />
        <h1 className="text-2xl text-center">Loading...</h1> */}

        {[...Array(5)].map((_, index) => (
          <div key={index} className="animate-pulse flex space-x-4 w-full">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  if (error)
    return (
      <div className="max-w-5xl  mx-auto  p-10  flex flex-col items-center justify-center gap-5">
        <CircleX size={40}></CircleX>
        <h1 className="text-2xl text-center">Error: {error}</h1>
      </div>
    );

  return (
    <div>
      {blogs.length > 0 ? (
        <>
          <div className="max-w-5xl mx-auto p-10 ">
            <h1 className="text-2xl">Blogs count ({blogs.length})</h1>

            {/* show blogs */}

            <div className="flex mt-5  justify-center gap-4 flex-wrap">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>

            <div className="mt-5">
              {pagination && (
                <BlogPagination
                  currentPage={page}
                  onPageChange={pageChange}
                  totalPages={totalPages}
                  pageSize={pageSize}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BlogsPage;
