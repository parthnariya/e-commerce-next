"use client";
import Image from "next/image";

type ProductPropsType = {
  id: string;
  title: string;
  price: number;
  image: string;
};
const Product = (props: ProductPropsType) => {
  return (
    <figure className="flex flex-col border-solid border-4 p-2 rounded-3xl">
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
          <button className="py-1 px-2 border-indigo-700 border-solid border-2 rounded-md hover:text-gray-50 text-indigo-700 hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
