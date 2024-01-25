import { ProductRepository } from "@/repository/ProductRepository";
import { NextRequest } from "next/server";

export async function GET() {
  const productRepository = new ProductRepository();
  const data = await productRepository.getProducts();
  if (data.length === 0) {
    return new Response("No Products Found", {
      status: 404,
    });
  } else {
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  }
}

export async function POST(request: NextRequest) {
  const body = request.body;
}
