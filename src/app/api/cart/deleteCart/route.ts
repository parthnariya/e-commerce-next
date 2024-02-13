import { CartRepository } from "@/repository/CartRepository";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return Response.json("Unauthorize", { status: 401 });
  }
  const cartRepository = new CartRepository();

  try {
    const res = await cartRepository.removeCart(userId);
    if (res) {
      return new Response("Cart removed successfully", { status: 200 });
    } else {
      return new Response("Something Went Wrong", { status: 201 });
    }
  } catch (e) {
    return new Response("Something Went Wrong", { status: 500 });
  }
}
