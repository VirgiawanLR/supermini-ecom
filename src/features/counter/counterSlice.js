import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    random: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

export function randomNumber() {
  return async (dispatch) => {
    try {
      const numberAPI =
        "http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=1";
      const response = await axios.get(numberAPI);
      console.log(counterSlice);
      dispatch(counterSlice.actions.random(response.data[0]));
    } catch (error) {}
  };
}
