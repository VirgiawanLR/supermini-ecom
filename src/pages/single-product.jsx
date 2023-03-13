import React from "react";
import { useParams } from "react-router-dom";
//routing single product: importing useParams to
import { useSelector } from "react-redux";
import CardProduct from "../components/Card";

//importing function to get single product data from API

function SingleProduct() {
  const allProducts = useSelector((state) => state.product.productList);
  const { id } = useParams();

  const renderCard = () => {
    const singleProduct = allProducts.filter((product) => {
      return product.id === id;
    });
    return singleProduct.map((product) => {
      return (
        <div>
          <CardProduct product={product} from={"single"} />
        </div>
      );
    });
  };

  /*   
useEffect(()=>{
dispatch(getProductById(id))
}, [])
*/
  //function above is second way to display single product

  return (
    <div className="grid lg:grid-cols-1 lg:pt-40 lg:px-20 grid-cols-1 pt-20">
      {renderCard()}
    </div>
  );
}

export default SingleProduct;
