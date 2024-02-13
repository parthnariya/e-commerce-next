"use client";
import {
  UserContext,
  decreaseCartCount,
  increaseCartCount,
} from "@/context/userContext";
import { addItem, removeItem } from "@/utils/apiCalls";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../assets/cartIcon.svg";
import CartItem from "./CartItem";
import Loading from "./UI/Loading";
import { useAuth, useClerk } from "@clerk/nextjs";

type CartDataType = {
  cartTotal: number;
  shippingCharge: number;
  taxes: number;
  cartItems: {
    product: {
      id: string;
      image: string;
      price: number;
      productName: string;
    };
    quantity: number;
    totalPrice: number;
  }[];
};

const Cart = () => {
  const [cartData, setCartData] = useState<CartDataType | null>(null);
  const [loading, setLoading] = useState<boolean>();
  const [, dispatch] = useContext(UserContext);
  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  const addToCartHandler = async (productId: string) => {
    if (!isSignedIn) {
      clerk.redirectToSignIn({});
    } else {
      setLoading(true);
      await addItem(productId);
      const res = await fetch("api/cart/", { method: "GET" });
      const data = await res.json();
      setLoading(false);
      if (data.cartTotal) {
        setCartData(() => data);
        dispatch(increaseCartCount());
      }
    }
  };
  const removeFromCartHandler = async (productId: string) => {
    if (!isSignedIn) {
      clerk.redirectToSignIn({});
    } else {
      setLoading(true);
      await removeItem(productId);
      const res = await fetch("api/cart/", { method: "GET" });
      const data = await res.json();
      if (
        data !== null &&
        "cartTotal" in data &&
        "cartItems" in data &&
        data.cartItems.length > 0
      ) {
        setCartData(() => data);
      } else {
        setCartData(() => null);
      }
      dispatch(decreaseCartCount());
      setLoading(false);
    }
  };
  useEffect(() => {
    isSignedIn &&
      (async function () {
        setLoading(true);
        const res = await fetch("api/cart/", { method: "GET" });
        const data = await res.json();
        setLoading(false);
        if (
          "cartTotal" in data &&
          "cartItems" in data &&
          data.cartItems.length > 0
        ) {
          setCartData(() => data);
        } else {
          setCartData(() => null);
        }
      })();
  }, [isSignedIn]);
  return (
    <div className="mx-16 my-3 flex flex-col gap-2 items-center h-full">
      {loading && <Loading />}
      {!loading && !cartData && (
        <div className="flex flex-col items-center justify-center py-12 h-full">
          <Image src={CartIcon} alt="CartIcon" className="h-24 w-24" />
          <p className="text-gray-600 text-lg font-semibold mb-4">
            Your shopping cart is empty.
          </p>
          <Link
            href={"/products"}
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Continue Shopping..
          </Link>
        </div>
      )}
      {!loading && cartData && (
        <>
          <h2 className="text-xl text-b font-bold text-left w-full">
            Shopping Cart
          </h2>
          <div className="flex w-full justify-center items-start gap-3 mt-8">
            <div className="w-4/6">
              <div className="table w-full  bg-white rounded-lg shadow-md p-6">
                <div className="table-row">
                  <div className="table-cell">
                    <h4 className="font-semibold text-left">Products</h4>
                  </div>
                  <div className="table-cell">
                    <h4 className="font-semibold text-left">Price</h4>
                  </div>
                  <div className="table-cell">
                    <h4 className="font-semibold text-left">Quantity</h4>
                  </div>
                  <div className="table-cell">
                    <h4 className="font-semibold text-left">TotalPrice</h4>
                  </div>
                </div>

                {cartData.cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    product={item.product}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                    addToCartHandler={addToCartHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-2/6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${cartData.cartTotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${cartData.taxes}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${cartData.shippingCharge}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 ">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  $
                  {cartData.cartTotal +
                    cartData.shippingCharge +
                    cartData.taxes}
                </span>
              </div>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
