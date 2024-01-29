"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import Loading from "./UI/Loading";
type ProductType = {
  price: number;
  productName: string;
  id: string;
  image: string;
};
async function getProducts(page: number) {
  const res = await fetch(`/api/product?page=${page}`, {
    method: "GET",
  });

  if (!res.ok) {
    return;
  }
  const products = await res.json();
  return products;
}
const ProductList = () => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");

  const [products, setProducts] = useState<{
    data: ProductType[];
    metadata: { hasNextPage: boolean };
  }>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getProducts(pageNumber ? +pageNumber : 1);
      setProducts(() => result);
      setLoading(false);
    })();
  }, [pageNumber]);
  return (
    <div className="mx-16 my-3 flex flex-col justify-between h-full">
      {loading ? (
        <Loading />
      ) : (
        products && (
          <>
            <div className="grid grid-cols-4 gap-5 flex-wrap">
              {products.data.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.productName}
                />
              ))}
            </div>
            <Pagination hasNextPages={products.metadata.hasNextPage} />
          </>
        )
      )}
    </div>
  );
};

export default ProductList;
