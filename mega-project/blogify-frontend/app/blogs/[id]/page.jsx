import ShowBlogContent from "@/components/ShowBlogContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/config/axiosConfig";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import React from "react";
import { formatTimeAgo } from "@/helper/date";
import PayBlog from "@/components/PayBlog";
async function BlogPage({ params }) {
  const { id } = await params;

  let post = null;

  try {
    const response = await apiClient.get(`/posts/${id}?populate=*`);
    post = response.data.data;
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className="px-10 py-10 mt-5 mx-auto max-w-7xl  flex flex-col gap-5 ">
        <div className="flex flex-row-reverse">
          <Badge variant="outline">
            <h1 className="text-right">@ {formatTimeAgo(post.publishedAt)}</h1>
          </Badge>
          <Badge variant="outline">
            <h1 className="text-right"> Read time almost {post.read_time}</h1>
          </Badge>
        </div>
        <h1 className="text-4xl dark:text-gray-200 font-semibold">
          {post.title}
        </h1>

        <div className="flex">
          <img
            className="w-auto rounded-2xl h-96 object-contain"
            src={
              process.env.NEXT_PUBLIC_STRAPI_BASE_URL +
              post.cover_image.formats.medium.url
            }
          />
        </div>

        <p className="font-light">{post.short_description}</p>

        {post.is_paid ? (
          <>
            <div className="flex">
              <PayBlog />
            </div>
          </>
        ) : (
          <div>
            <ShowBlogContent content={post.content}></ShowBlogContent>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogPage;
