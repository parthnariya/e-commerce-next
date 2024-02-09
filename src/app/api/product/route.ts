import { ProductRepository } from "@/repository/ProductRepository";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const productRepository = new ProductRepository();
  const { searchParams } = new URL(request.url);
  const productIdParam = searchParams.get("productId");
  if (!productIdParam) {
    return new Response("Invalid ProductID", {
      status: 404,
    });
  }
  const result = await productRepository.getProduct(productIdParam);
  if (!result) {
    return new Response("No Products Found", {
      status: 404,
    });
  } else {
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  }
}

/* export async function POST(request: NextRequest) {
  const body = request.body;
} */
