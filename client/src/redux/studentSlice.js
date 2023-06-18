import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default studentSlice.reducer;
