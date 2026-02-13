import { apiClient } from "@/config/axiosConfig";

export const uploadImage = async (files) => {
  const form = new FormData();
  form.append("files", files);
  const result = await apiClient.post("/upload", form, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });

  return result.data;
};

export const createPost = async (post) => {
  const result = await apiClient.post(
    "/posts",
    {
      data: post,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );

  return result.data;
};
