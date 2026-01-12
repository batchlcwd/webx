import { configureStore } from "@reduxjs/toolkit";
import authRedcuer from "./features/auth/authSlice";
import boardRedcuer from "./features/board/boardSlice";
import listReducer from "./features/list/listSlice";
export const store = configureStore({
  reducer: {
    auth: authRedcuer,
    board: boardRedcuer,
    list: listReducer,
  },
});
