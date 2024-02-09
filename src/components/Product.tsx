"use client";
import { UserContext, increaseCartCount } from "@/context/userContext";
import { addItem } from "@/utils/apiCalls";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useContext, useState } from "react";

type ProductPropsType = {
  id: string;
  title: string;
  price: number;
  image: string;
};
const Product = (props: ProductPropsType) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [, dispatch] = useContext(UserContext);
  const addCartHandler: MouseEventHandler = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    await addItem(props.id);
    dispatch(increaseCartCount());
    setButtonLoading(false);
  };
  return (
    <Link href={`/product/${props.id}`}>
      <figure className="flex flex-col border-solid border-4 p-2 rounded-3xl cursor-pointer">
        <Image
          src={props.image}
          alt={props.title}
          width={500}
          height={500}
          className="w-full h-4/5 rounded-2xl"
        />
        <figcaption className="flex flex-col items-start p-2 gap-1">
          <h2 className="text-zinc-950 font-bold">{props.title}</h2>
          <div className="flex justify-between w-full">
            <p className="text-zinc-800 font-medium">$ {props.price}</p>
            <button
              className="py-1 px-2 border-indigo-700 border-solid border-2 rounded-md hover:text-gray-50 text-indigo-700 hover:bg-indigo-700"
              onClick={addCartHandler}
            >
              {buttonLoading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Product;
