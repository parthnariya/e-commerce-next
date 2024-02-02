import { prisma } from "@/library/prisma";
export class CartRepository {
  async addItemToCart(userId: string, productId: string, quantity: number) {
    const product = await prisma.product.findFirstOrThrow({
      where: {
        id: productId,
      },
    });
    if (!product) return { status: "product not found" };
    const cart = await prisma.cart.findFirst({
      where: {
        userId,
      },
    });
    try {
      if (!cart) {
        const cartId = await prisma.cart.create({
          data: {
            cartTotal: product.price * quantity,
            shippingCharge: product.price * quantity < 500 ? 50 : 0,
            taxes: 0,
            userId,
          },
          select: {
            id: true,
          },
        });

        const cartItem = await prisma.cartItem.create({
          data: {
            productId,
            cartId: cartId.id,
            totalPrice: product.price * quantity,
          },
        });
        return { status: "Product Added Successfully", data: cartItem.id };
      }
    } catch (e) {
    }
  }
  async getCartItemCount(cartId: string) {
    try {
      const count = await prisma.cartItem.groupBy({
        by: "cartId",
        where: { cartId },
        _count: {
          id: true,
        },
      });

      return count;
    } catch (e) {
    }
  }
}
