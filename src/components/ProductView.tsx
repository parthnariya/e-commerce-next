"use client";
import { addItem, getProduct } from "@/utils/apiCalls";
import { useAuth, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import Loading from "./UI/Loading";

type ProductViewPropsType = {
  id: string;
};
type ProductDetailsType = {
  productName: string;
  image: string;
  description: string;
  price: number;
};

const ProductView = ({ id }: ProductViewPropsType) => {
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [productData, setProductData] = useState<
    ProductDetailsType | undefined
  >();

  const addToCartHandler: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      clerk.redirectToSignIn({});
    }
    if (isSignedIn) {
      setButtonLoading(true);
      await addItem(id);
      setButtonLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getProduct(id);
      if (result) {
        setProductData(() => result);
      }
      setLoading(false);
    })();
  }, [id]);
  return (
    <div className="mx-16 my-3 flex justify-center p-5 gap-5 items-center h-full">
      {loading && <Loading />}
      {productData && (
        <>
          <div className="w-3/5">
            <Image
              src={productData.image}
              width={500}
              height={500}
              alt={productData.productName}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col items-start gap-16 justify-center  w-2/5 h-full">
            <div className="flex flex-col items-start justify-center gap-8 mt-2">
              <h2 className="text-xl font-semibold text-gray-700">
                {productData.productName}
              </h2>
              <p className="text-base text-gray-500 mt-1 text-left">
                {productData.description}
              </p>
            </div>
            <div className="flex items-center justify-end mt-2 w-full">
              <span className="text-lg font-semibold text-gray-900 mr-2">
                $ {productData.price}
              </span>
              <button
                onClick={addToCartHandler}
                className="py-1 px-2 border-indigo-700 border-solid border-2 rounded-md hover:text-gray-50 text-indigo-700 hover:bg-indigo-700"
              >
                {buttonLoading ? "Adding...." : "Add to Cart"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
