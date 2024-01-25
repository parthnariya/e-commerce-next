"use client";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(() => data);
    })();
  }, []);
  return (
    <div className="mx-16 my-3">
      <div className="grid grid-cols-4 gap-5 ">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.productName}
          />
        ))}
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
