import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, InputGroup, Input, InputLeftAddon } from "@chakra-ui/react";
import CardProduct from "./Card";
import { useState } from "react";

function Navbar() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const allCart = useSelector((state) => state.cart.cartList);

  const hoverHandler = () => {
    setModal(!modal);
  };

  const renderCard = () => {
    return allCart.map((product) => {
      return (
        <div>
          <CardProduct product={product} from="navbar" />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-row py-5 justify-between items-center bg-white shadow-md">
      <div className=" mx-16 text-2xl font-bold text-green-600">
        <button
          onClick={() => {
            navigate("/learnform");
          }}
        >
          WebsiteKu
        </button>
      </div>
      <div className=" w-1/2">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children={<i class="uil uil-search"></i>} />
            <Input type="tel" placeholder="Search-bar" />
          </InputGroup>
        </Stack>
      </div>
      <div className="mx-8 flex flex-row items-center gap-4 justify-between">
        <div className=" w-40 flex flex-row justify-between items-center">
          <div
            className="flex flex-row items-center"
            onClick={() => hoverHandler()}
          >
            <i class="uil uil-shopping-cart-alt text-slate-800 hover:cursor-pointer text-3xl"></i>
            {allCart.length > 0 && (
              <div className="flex items-center justify-center text-white text-sm bg-red-500 w-6 h-6 rounded-full">
                {allCart.length}
              </div>
            )}
            {modal && (
              <div className="relative modal-container z-50">
                <div className="absolute top-20 right-40 w-96  bg-white shadow-md py-5 px-5">
                  <div className="modal-content flex flex-row justify-between">
                    <span className=" text-sm font-semibold text-slate-800">
                      Keranjang ({allCart.length})
                    </span>
                    <span
                      className=" text-sm font-semibold text-green-600 hover:cursor-pointer"
                      onClick={() => navigate("/cart")}
                    >
                      Lihat Sekarang
                    </span>
                  </div>
                  <div>{renderCard()}</div>
                </div>
              </div>
            )}
          </div>
          <i class="uil uil-envelope text-3xl text-slate-800"></i>
          <i class="uil uil-bell text-3xl text-slate-800"></i>
        </div>
        <div>
          <span className=" text-4xl font-extralight">|</span>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <i class="uil uil-user-circle text-slate-800 text-3xl hover:cursor-pointer"></i>
          <button
            className="font-bold text-slate-800 hover:underline"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
