import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productAPI = "http://localhost:2000/products";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [], //this initialvalue can be named with anything
  },
  reducers: {
    setProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;

export function fetchProductsData() {
  return async (dispatch) => {
    const response = await axios.get(productAPI);
    dispatch(productSlice.actions.setProduct(response.data));
  };
}

export function getProductById(productId) {
  return async (dispatch) => {
    let response = await axios.get(productAPI, {
      params: {
        id: productId,
      },
    });
  };
}
//second way to display single product
