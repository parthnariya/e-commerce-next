import { notFound } from "next/navigation";
type ProductDescriptionPropType = {
  params: { productId: string };
};
function ProductDescription({ params }: ProductDescriptionPropType) {
  if (+params.productId > 200) {
    notFound();
  }
  return <div>Product Id: {params.productId}</div>;
}

export default ProductDescription;
