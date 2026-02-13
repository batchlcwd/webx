"use client";
import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { createPost, uploadImage } from "@/blogs/blogService";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { Spinner } from "./ui/spinner";
import MDEditor from "@uiw/react-md-editor";
function CreateArticle() {
  const { isLoaded, userId, sessionId } = useAuth();
  const [categories, setCategories] = useState("");
  const [uploading, setUploading] = useState(false);

  const [post, setPost] = useState({
    title: "",
    short_description: "",
    content: "",
    is_paid: false,
    read_time: "",
    is_published: false,
    cover_image_file: null,
  });
  const [error, setError] = useState(null);

  const handleFormFieldChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(post);

    // upload the file
    try {
      setUploading(true);
      const result = await uploadImage(post.cover_image_file);
      console.log(result);
      console.log(result[0].id);
      //   setPost({ ...post, cover_image: result[0].id });

      //create post api:

      const postCreatedResult = await createPost({
        title: post.title,
        short_description: post.short_description,
        content: post.content,
        is_paid: post.is_paid,
        read_time: post.read_time,
        is_published: post.is_published,
        cover_image: result[0].id,
        clerk_user_id: userId,
      });

      console.log(postCreatedResult);
      console.log("post created ");
      console.log(post);
      toast.success("Post created successfully");
      setPost({
        title: "",
        short_description: "",
        content: "",
        is_paid: false,
        read_time: "",
        is_published: false,
        cover_image_file: null,
      });
    } catch (error) {
      console.log(error);
      setError(error);
      toast.error("Error creating post");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2  mx-auto p-6">
      <form action="" onSubmit={handleSubmit}>
        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              <div className="flex justify-between">
                <p>Create New Post</p>
                <Button type="button" variant="outline">
                  Geneate with AI
                </Button>
              </div>
            </CardTitle>
            {error && <p className="text-red-500">{error.message}</p>}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                name="title"
                value={post.title}
                onChange={handleFormFieldChange}
                placeholder="Post title"
              />
            </div>

            {/* Short Description */}
            <div className="space-y-2">
              <Label>Short Description</Label>
              <Textarea
                name="short_description"
                value={post.short_description}
                onChange={handleFormFieldChange}
                placeholder="A short summary of the post"
              />
            </div>

            {/* Markdown Content */}
            <div className="space-y-2">
              <Label>Content (Markdown)</Label>
              {/* <Textarea
                name="content"
                value={post.content}
                onChange={handleFormFieldChange}
                placeholder="Write your markdown content here..."
                className="min-h-[200px] font-mono"
              /> */}
              <MDEditor
                height={400}
                data-color-mode="auto"
                value={post.content}
                onChange={(event) => {
                  setPost({ ...post, content: event }); // c
                }}
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <Input
                onChange={(event) => {
                  setPost({ ...post, cover_image_file: event.target.files[0] });
                }}
                type="file"
                accept="image/*"
              />
            </div>

            {/* Read Time */}
            <div className="space-y-2">
              <Label>Read Time (minutes)</Label>
              <Input
                name="read_time"
                value={post.read_time}
                onChange={handleFormFieldChange}
                type="text"
                min="1"
                placeholder="5"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <Label>Categories</Label>
              <Input
                placeholder="e.g. React, Tailwind, UI"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              />
              <div className="flex flex-wrap gap-2">
                {categories
                  .split(",")
                  .filter(Boolean)
                  .map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat.trim()}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="flex justify-start gap-10 px-4">
              <div className="flex gap-3 items-center justify-between">
                <Label>Published</Label>
                <Switch
                  name="is_published"
                  defaultChecked={post.is_published}
                  onCheckedChange={(event) => {
                    setPost({
                      ...post,
                      is_published: event,
                    });
                  }}
                />
              </div>
              <div className="flex gap-3 items-center justify-between">
                <Label>Paid</Label>
                <Switch
                  name="is_paid"
                  defaultChecked={post.is_paid}
                  onCheckedChange={(event) => {
                    setPost({
                      ...post,
                      is_paid: event,
                    });
                  }}
                />
              </div>
            </div>

            {/* Hidden Clerk User ID */}
            <input type="hidden" name="clerk_user_id" value="CURRENT_USER_ID" />

            {/* Submit */}
            <Button
              disabled={uploading}
              type="submit"
              className="w-full text-lg rounded-xl"
            >
              {uploading ? (
                <span className="flex items-center gap-2">
                  <Spinner></Spinner> Uploading
                </span>
              ) : (
                "Create Post"
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default CreateArticle;
