import { CartRepository } from "@/repository/CartRepository";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cartRepository = new CartRepository();

  const { userId } = getAuth(request);
  if (!userId) {
    return new Response("Unauthorize", { status: 401 });
  }
  const result = await cartRepository.getCartItemCount(userId);

  return new Response(JSON.stringify(result), {
    status: 200,
  });
}
