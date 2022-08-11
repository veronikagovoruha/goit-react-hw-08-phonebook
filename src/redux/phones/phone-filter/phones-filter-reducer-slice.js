import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    change: (store, { payload }) => {
      return payload
    },
  },
});

export const { change } = filterReducer.actions;

export default filterReducer.reducer;