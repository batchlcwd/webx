import { apiClient } from "@/config/axiosConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ page = 1, pageSize = 10 }) => {
    const response = await apiClient.get(
      `/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=createdAt:desc`
    );
    return response.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    pagination: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.data;
        state.pagination = action.payload.meta.pagination;
        state.loading = false;
        console.log(action.payload);
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
