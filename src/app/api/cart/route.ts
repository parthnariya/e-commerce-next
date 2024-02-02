import { CartRepository } from "@/repository/CartRepository";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return Response.json("Unauthorize", { status: 401 });
  }
  const cartRepository = new CartRepository();
  try {
    const item = await request.json();

    const res = await cartRepository.addItemToCart(
      userId,
      item.productId,
      item.quantity
    );
    if (res && res.data) {
      return new Response("Product added Successfully", { status: 200 });
    } else {
      return new Response("Something Went Wrong", { status: 201 });
    }
  } catch (e) {
    return new Response("Something Went Wrong", { status: 500 });
  }
}
