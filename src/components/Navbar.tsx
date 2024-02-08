"use client";
import ProfileIcon from "../assets/profileIcon.svg";
import CartIcon from "../assets/cartIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { UserContext, setCartItemCount } from "@/context/userContext";

const getCartItemCount = async () => {
  const res = await fetch("/api/cart/itemscount", { method: "GET" });
  const count = await res.json();
  return count;
};

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const count = await getCartItemCount();
      dispatch(setCartItemCount(count));
    })();
  }, [dispatch]);
  return (
    <header className="inline row-start-1 row-end-2  col-start-2 col-end-12">
      <nav className="flex justify-between align-middle p-4 bg-slate-300 m-4 rounded-md">
        <div>
          <h1>
            <Link href={"/"}>E-Shop</Link>
          </h1>
        </div>
        <div className="flex gap-5 align-middle">
          <Image src={ProfileIcon} alt="ProfileIcon" />
          <Link href={"/cart"}>
            <strong className="relative">
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full align-middle text-sm bg-indigo-500 text-white font-medium">
                {state.cartItemsCount}
              </span>
              <Image src={CartIcon} alt="CartIcon" />
            </strong>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
