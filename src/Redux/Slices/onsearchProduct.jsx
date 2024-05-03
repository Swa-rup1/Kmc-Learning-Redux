import { createSlice } from "@reduxjs/toolkit";
import { fetchonsearchProduct } from "../../Services/AllProduct";

const initialState = {
  data: [],
  loading: false,
  error: null,

};

const onsearchProduct = createSlice({
  name: "onsearchProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchonsearchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchonsearchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchonsearchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default onsearchProduct.reducer;
