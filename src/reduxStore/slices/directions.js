import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topdirection: 0,
  leftdirection: 0,
};

export const changeDirection = createSlice({
  name: "changeDirection",
  initialState,
  reducers: {
    changeTop: (state, action) => {
      if (action.payload === "increment") {
        state.topdirection += 70;
      } else {
        state.topdirection -= 70;
      }
    },
    changeLeft: (state, action) => {
      if (action.payload === "increment") {
        state.leftdirection += 70;
      } else {
        state.leftdirection -= 70;
      }
    },
    resetValues: (state) => {
      state.leftdirection = 0;
      state.topdirection = 0;
    },
  },
});

export const { changeTop, changeLeft, resetValues } = changeDirection.actions;

export default changeDirection.reducer;
