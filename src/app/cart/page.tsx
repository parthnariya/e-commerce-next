import Cart from "@/components/Cart";
import Loading from "@/components/UI/Loading";
import { ProductRepository } from "@/repository/ProductRepository";
import { Suspense } from "react";

async function createProduct() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Eu nisl nunc mi ipsum faucibus vitae.";
  const repo = new ProductRepository();
  repo.createProduct(
    "pixel 6a",
    desc,
    20000,
    "https://api.slingacademy.com/public/sample-photos/3.jpeg",
    30
  );
}
function CartPage() {
  // await createProduct()
  return (
    <Suspense fallback={<Loading />}>
      <Cart />
    </Suspense>
  );
}

export default CartPage;
