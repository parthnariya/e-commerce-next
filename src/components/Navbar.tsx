"use client";
import ProfileIcon from "../assets/profileIcon.svg";
import CartIcon from "../assets/cartIcon.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="inline row-start-1 row-end-2  col-start-2 col-end-12">
      <nav className="flex justify-between align-middle p-4 bg-slate-300 m-4 rounded-md">
        <div>
          <h1>
            <Link href={'/'}>E-Shop</Link>
          </h1>
        </div>
        <div className="flex gap-5 align-middle">
          <Image src={ProfileIcon} alt="ProfileIcon" />
          <Image src={CartIcon} alt="CartIcon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
