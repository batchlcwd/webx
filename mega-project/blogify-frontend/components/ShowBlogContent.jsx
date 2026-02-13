"use client";

import Markdown from "markdown-to-jsx";
import React from "react";

function ShowBlogContent({ content }) {
  return (
    <div className="no-tailwind">
      <Markdown>{content}</Markdown>
    </div>
  );
}

export default ShowBlogContent;
