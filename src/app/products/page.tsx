import ProductList from "@/components/ProductList";
import Loading from "@/components/UI/Loading";
import { Suspense } from "react";

const Products = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductList />
    </Suspense>
  );
};

export default Products;
