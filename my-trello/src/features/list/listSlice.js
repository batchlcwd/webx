import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLists } from "../list/listService";

export const getListsThunk = createAsyncThunk(
  "task/getLists",
  async (boardId) => {
    return await getLists(boardId);
  }
);

const listsSlice = createSlice({
  initialState: {
    lists: null,
    loading: false,
    error: null,
  },
  name: "list",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.lists = action.payload;
        console.log(action.payload);
      })
      .addCase(getListsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error);
      });
  },
});

export default listsSlice.reducer;
