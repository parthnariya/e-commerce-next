import { ProductRepository } from "@/repository/ProductRepository";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const productRepository = new ProductRepository();
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page");
  const id = typeof pageParam === "string" ? +pageParam : 0;
  const result = await productRepository.getProducts(id);
  if (result.data.length === 0) {
    return new Response("No Products Found", {
      status: 404,
    });
  } else {
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  }
}

export async function POST(request: NextRequest) {
  const body = request.body;
}
