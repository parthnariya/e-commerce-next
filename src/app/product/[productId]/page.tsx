import ProductView from "@/components/ProductView";
import Loading from "@/components/UI/Loading";
import { Suspense } from "react";
type ProductDescriptionPropType = {
  params: { productId: string };
};

async function ProductDescription({ params }: ProductDescriptionPropType) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductView id={`${params.productId}`} />
    </Suspense>
  );
}

export default ProductDescription;
