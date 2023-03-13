import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Card";

function CartPages() {
  const allCart = useSelector((state) => state.cart.cartList);
  const renderCard = () => {
    return allCart.map((product) => {
      return (
        <div>
          <CardProduct product={product} from={"cart"} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="grid lg:w-3/4 lg:pt-32 lg:px-20 grid-cols-1 pt-20">
        {renderCard()}
      </div>
      <div className="lg:w-1/4"></div>
    </div>
  );
}

export default CartPages;
