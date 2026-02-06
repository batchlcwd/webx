"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
function BlogCard({
  title,
  short_description,
  cover_image,
  read_time,
  categories,
}) {
  return (
    <Card className="w-full  lg:w-[32%] overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      {/* Cover Image */}
      <div className="relative  aspect-[16/9] w-full overflow-hidden">
        <img
          src={
            process.env.NEXT_PUBLIC_STRAPI_BASE_URL +
            cover_image.formats.medium.url
          }
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Header */}
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {cat.name}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold leading-snug line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {short_description}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          <span>{read_time}</span>
        </div>
        <span className="cursor-pointer font-medium text-primary hover:underline">
          Read more →
        </span>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
