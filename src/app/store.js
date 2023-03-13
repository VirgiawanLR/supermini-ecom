import { configureStore } from "@reduxjs/toolkit";
//redux: importing configurestore
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlices";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

//redux: export default with empty object reducer

//every xxxslice.reducer on each xxxslice.js are being stored in
// configureStore({reducer: {xxx:xxxReducer, ect}}) as an object of
// reducer that also an object argument for configureStore
