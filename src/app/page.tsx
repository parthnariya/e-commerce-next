"use server";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { prisma } from "@/utils/prisma";

// async function getProducts() {
//   const data = await prisma.product.findMany({
//     select: {
//       productName: true,
//       id: true,
//       price: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   return data;
// }
async function createProduct() {
  const product = await prisma.product.create({
    data: {
      productName: "pixel 6a",
      descrition: "mobilePhone",
      price: 20000,
      quantity: 200,
    },
  });
  return product;
}

const Home = async () => {
  const data = await createProduct();
  console.log({ data });
  return (
    <div className="mx-16 my-3">
      <div className="grid grid-cols-4 gap-5 ">
        <Product
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
        />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
