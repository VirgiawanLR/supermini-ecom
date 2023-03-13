import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const cartAPI = "http://localhost:2000/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartList = action.payload;
    },
  },
});

export default cartSlice.reducer;

export function postCartData(data) {
  return async (dispatch) => {
    const response = await axios.post(cartAPI, data);
    dispatch(fetchCartData());
  };
}

export function fetchCartData() {
  return async (dispatch) => {
    const response = await axios.get(cartAPI);
    dispatch(cartSlice.actions.setCart(response.data));
  };
}
