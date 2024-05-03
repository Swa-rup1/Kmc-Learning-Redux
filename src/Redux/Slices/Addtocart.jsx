import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const Addtocart = createSlice({
  name: "addtocard",
  initialState,
  reducers: {
    updateCard: (state, action) => {
      state.loading = true;
      state.data = action.payload; //Merge new Data with existing
    },
    setDataLoading: (state, action) => {
      state.loading = action.payload;
    },

    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { updateCard, setLoading, clearData } = Addtocart.actions;
export default Addtocart.reducer;
