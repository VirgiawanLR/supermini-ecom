import React from "react";
import {
  Card,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, postCartData } from "../features/cart/cartSlices";
import { productSlice } from "../features/product/productSlice";

function CardProduct(props) {
  const [counter, setCounter] = useState(0);
  const { product } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);
  const allProduct = useSelector((state) => state.product.productList);

  const addToCart = () => {
    console.log({ ...product, sum: counter });
    dispatch(postCartData({ ...product, sum: counter }));
    alert("barang berhasil ditambahkan");
  };

  const increment = () => {
    if (counter < parseInt(product.stock)) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert("Stock tidak mencukupi");
    }
  };

  const decrement = () => {
    if (counter !== 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
    }
  };

  // const baseImage = props.from === "navbar" ? "15%" : "50%";
  // const smImage = props.from === "navbar" ? "42px" : "140px";

  return (
    <div className={props.from === "navbar" ? "my-4 mx-1" : "mb-10 mx-5"}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        {props.from === "navbar" ? (
          <Image
            objectFit="cover"
            maxW={{ base: "30%", sm: "50px" }}
            src={product.productImage}
            alt="Caffe Latte"
          />
        ) : (
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "140px" }}
            src={product.productImage}
            alt="Caffe Latte"
          />
        )}

        <Stack>
          <CardBody>
            <Heading size={props.from === "navbar" ? "sm" : "md"}>
              {product.productName}
            </Heading>

            <Text py={props.from === "navbar" ? "1" : "2"}>
              {product.description}{" "}
              {(props.from === "navbar" || props.from === "cart") && (
                <span className=" block">
                  sum:{" "}
                  {
                    cart.filter((item) => {
                      return item.id == product.id;
                    })[0].sum
                  }
                </span>
              )}
            </Text>
            {!(props.from === "navbar" || props.from === "cart") && (
              <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-3 border-2 border-slate-400 items-center rounded-lg px-4 py-1">
                  <button
                    className=" text-slate-400 font-bold text-xl hover:bg-slate-400"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <span className="font-bold">{counter}</span>
                  <button
                    className=" text-green-600 text-xl hover:bg-slate-400"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <Text>
                  stock: <span className="font-semibold">{product.stock}</span>
                </Text>
              </div>
            )}
          </CardBody>
          {!(props.from === "navbar" || props.from === "cart") && (
            <CardFooter className="flex gap-4">
              <Button variant="solid" colorScheme="green" onClick={addToCart}>
                Add to Cart
              </Button>
              {!(props.from === "single" || props.from === "navbar") && (
                <Button onClick={() => navigate("/product/" + product.id)}>
                  See detail
                </Button>
              )}
              {/*routing single product: add navigate to single product*/}
            </CardFooter>
          )}
        </Stack>
      </Card>
    </div>
  );
}

export default CardProduct;
