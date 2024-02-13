"use client";
import { UserContext, setCartItemCount } from "@/context/userContext";
import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import CartIcon from "../assets/cartIcon.svg";
import ProfileIcon from "../assets/profileIcon.svg";

const getCartItemCount = async () => {
  try {
    const res = await fetch("/api/cart/itemscount", { method: "GET" });
    const count = await res.json();
    return count;
  } catch (e) {
    return 0;
  }
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const { isSignedIn, isLoaded, user } = useUser();
  const clerk = useClerk();
  useEffect(() => {
    isSignedIn &&
      (async () => {
        const count = await getCartItemCount();

        dispatch(setCartItemCount(count === null ? 0 : count));
      })();
  }, [dispatch, isSignedIn]);

  const dropdownHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="inline row-start-1 row-end-2  col-start-2 col-end-12">
      <nav className="flex justify-between align-middle p-4 bg-slate-300 m-4 rounded-md">
        <div>
          <h1>
            <Link href={"/"}>E-Shop</Link>
          </h1>
        </div>
        <div className="flex gap-5 align-middle relative">
          <Image
            src={ProfileIcon}
            alt="ProfileIcon"
            onClick={dropdownHandler}
            className="cursor-pointer"
          />
          {showDropdown && (
            <div className="mt-2 rounded-lg py-2 bg-slate-200 shadow-xl absolute right-2/3 top-2/3 ease-in-out">
              <ul className="p-1">
                {isLoaded && isSignedIn && (
                  <li className="cursor-pointer p-2">
                    <p>
                      {user.username || user.emailAddresses[0].emailAddress}
                    </p>
                  </li>
                )}
                <li className="cursor-pointer p-2">
                  {isSignedIn ? (
                    <p
                      onClick={() => {
                        clerk.signOut();
                        window.location.reload();
                      }}
                    >
                      Logout
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        clerk.redirectToSignIn();
                      }}
                    >
                      Login
                    </p>
                  )}
                </li>
              </ul>
            </div>
          )}
          <Link href={"/cart"}>
            <strong className="relative">
              {state.cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full align-middle text-sm bg-indigo-500 text-white font-medium">
                  {state.cartItemsCount}
                </span>
              )}
              <Image src={CartIcon} alt="CartIcon" />
            </strong>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
