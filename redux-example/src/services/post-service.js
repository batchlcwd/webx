//services for post
import { axiosClient } from "./axios-config";

export const getPosts = async () => {
  const response = await axiosClient.get("/posts");
  return response.data;
};

export const createPost = async (postOb) => {
  const response = await axiosClient.post("/posts", postOb);
  return response.data;
};

export const updatePost = async (id, postOb) => {
  const response = await axiosClient.put(`/posts/${id}`, postOb);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axiosClient.delete(`/posts/${id}`);
  return response.data;
};

export const searchPosts = async (query) => {
  const response = await axiosClient.get(`/posts?title_like=${query}`);
  return response.data;
};
