import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./redux/adminSlice";
import studentReducer from "./redux/studentSlice";
const store = configureStore({
  reducer: {
    admin : adminReducer,
    student : studentReducer,
  },
});

export default store;
