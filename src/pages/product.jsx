import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Card";
import { fetchCartData } from "../features/cart/cartSlices";

function ProductEcom() {
  const allProducts = useSelector((state) => state.product.productList);
  // const cartProducts = useSelector((state) => state.cart.cartList);
  useEffect(() => {
    fetchCartData();
  }, []);

  const renderCard = () => {
    return allProducts.map((product) => {
      return (
        <div>
          <CardProduct product={product} />
        </div>
      );
    });
  };

  return (
    <div className="grid lg:grid-cols-2 lg:pt-32 lg:px-20 grid-cols-1 pt-20">
      {renderCard()}
    </div>
  );
}

export default ProductEcom;
