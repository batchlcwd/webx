import React from "react";

async function BlogPage({ params }) {
  const { id } = await params;
  return <div className="text-3xl p-3">BlogPage {id}</div>;
}

export default BlogPage;
