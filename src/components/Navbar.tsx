"use client";
import ProfileIcon from "../assets/profileIcon.svg";
import CartIcon from "../assets/cartIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
const Navbar = () => {
  const [state, ] = useContext(UserContext);
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
