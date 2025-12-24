import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, getPosts } from "../../services/post-service";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    //api calling actual logi
    try {
      // thunkAPI.getState()
      const post = await createPost(data);
      return post;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid username or password !!");
    }
  }
);
