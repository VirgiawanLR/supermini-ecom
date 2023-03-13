import "./App.css";
import { Route, Routes } from "react-router-dom";
import LearnStorage from "./pages/learn-storage";
import Counter from "./pages/counter";
import LearnForm from "./pages/learn-form";
import ProductEcom from "./pages/product";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/single-product";
import CartPages from "./pages/cart";
import { fetchProductsData } from "./features/product/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./features/users/userSlice";
import { fetchCartData } from "./features/cart/cartSlices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(fetchUserData());
    dispatch(fetchCartData());
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/learnstorage" element={<LearnStorage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/learnform" element={<LearnForm />} />
        <Route path="/products" element={<ProductEcom />} />

        {/* ======path parameter */}
        <Route path="/product/:id" element={<SingleProduct />} />
        {/* we apply "/:id" notice that ":id" is a parameter that will apply into
        the pages path, "id" is a value of string of any characters*/}

        <Route path="/cart" element={<CartPages />} />
      </Routes>
    </div>
  );
}

export default App;
