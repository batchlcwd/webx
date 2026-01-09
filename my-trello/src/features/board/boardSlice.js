import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBoardsList } from "./boardService";

export const getBoards = createAsyncThunk("board/getBoards", async (userId) => {
  return await getBoardsList(userId);
});

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBoards.fulfilled, (state, action) => {
      state.loading = false;
      state.boards = action.payload;
      //   console.log(state.boards);
    });
    builder.addCase(getBoards.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log(action.error);
    });
  },
});

export default boardSlice.reducer;
