"use client";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { useEffect, useState } from "react";

type ProductType = {
  price: number;
  productName: string;
  id: string;
  image: string;
};

async function getProducts() {
  const res = await fetch("/api/product", {
    method: "GET",
  });
  if (!res.ok) {
    console.log("res", res);
    return;
  }
  const products = await res.json();
  return products;
}

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(() => data);
      setLoading(false);
    })();
  }, []);
  return (
    <div className="mx-16 my-3 flex flex-col justify-between h-full">
      <div className="grid grid-cols-4 gap-5 flex-wrap">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.productName}
            />
          ))
        )}
        {/* <Product
          id="1"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="2"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="3"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="4"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="5"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        /> */}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
