import { createSlice } from "@reduxjs/toolkit";

export const rocketReducer = createSlice({
  name: "spacex/rocket/",
  initialState : [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  }
}) 
