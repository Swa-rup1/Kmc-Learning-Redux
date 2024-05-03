import { createSlice } from "@reduxjs/toolkit";
import { fetchsort } from "../../Services/AllProduct";

const initialState = {
  data: [],
  loading: false,
  error: null,

};

const sort = createSlice({
  name: "sort",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsort.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchsort.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchsort.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sort.reducer;
