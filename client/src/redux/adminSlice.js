import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  },
});

export default adminSlice.reducer;
