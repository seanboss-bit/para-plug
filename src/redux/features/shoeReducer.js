import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoes: [],
};

const shoeSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    addShoe: (state, action) => {
      state.shoes = action.payload;
    },
    searchShoe: (state, action) => {
      let result = state.shoes.filter((item) => {
        if (action.payload === "") {
          return item;
        } else if (
          item.name.toLowerCase().includes(action.payload.toLocaleLowerCase())
        ) {
          return item;
        }
      });
      state.shoes = result;
    },
  },
});

export const { addShoe, searchShoe } = shoeSlice.actions;
export default shoeSlice.reducer;
