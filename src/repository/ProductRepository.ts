import { prisma } from "@/library/prisma";

export class ProductRepository {
  async createProduct(
    productName: string,
    description: string,
    price: number,
    image: string,
    quantity: number
  ) {
    await prisma.product.create({
      data: {
        productName,
        description,
        price,
        quantity,
        image,
      },
    });
  }
  async getProducts() {
    const data = await prisma.product.findMany({
      select: {
        price: true,
        productName: true,
        description: true,
        id: true,
        image: true,
      },
    });
    return data;
  }
}
