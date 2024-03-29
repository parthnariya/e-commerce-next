import Cart from "@/components/Cart";
import Loading from "@/components/UI/Loading";
import { Suspense } from "react";

async function CartPage() {
  
  return (
    <Suspense fallback={<Loading />}>
      <Cart />
    </Suspense>
  );
}

export default CartPage;
