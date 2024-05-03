import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../Services/AllProduct";

const initialState = {
  data: [],
  loading: false,
  error: null,

};

const searchProduct = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSearchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchProduct.reducer;
