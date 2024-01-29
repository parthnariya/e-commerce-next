import { prisma } from "@/library/prisma";
import { revalidatePath } from "next/cache";
import { env } from "process";

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
  async getProducts(skip = 0) {
    const take = typeof env.PAGE_SIZE === "string" ? +env.PAGE_SIZE : 8;
    const data = await prisma.product.findMany({
      take,
      skip: (skip - 1) * take,
      select: {
        price: true,
        productName: true,
        id: true,
        image: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const total = await prisma.product.count();
    revalidatePath("/");
    return {
      data,
      metadata: {
        hasNextPage: (skip - 1) * take + take < total,
      },
    };
  }
}
