import { axiosClient } from "./axios-config";

export const createUser = async (userOb) => {
  const response = await axiosClient.post("/users", userOb);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axiosClient.delete(`/users/${id}`);
  return response.data;
};
