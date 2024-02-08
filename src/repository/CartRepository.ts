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
      let cartId: { id: string };
      if (!cart) {
        cartId = await prisma.cart.create({
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
      } else {
        cartId = cart;
        await prisma.cart.update({
          where: {
            id: cartId.id,
          },
          data: {
            cartTotal: cart.cartTotal + product.price * quantity,
            shippingCharge:
              cart.shippingCharge + cart.cartTotal + product.price * quantity >
              500
                ? 50
                : 0,
          },
        });
      }
      const cartItemExist = await prisma.cartItem.findFirst({
        select: {
          id: true,
          quantity: true,
          totalPrice: true,
        },
        where: {
          cartId: cartId.id,
          productId,
        },
      });
      if (cartItemExist) {
        await prisma.cartItem.update({
          where: {
            id: cartItemExist.id,
          },
          data: {
            quantity: cartItemExist.quantity + 1,
            totalPrice: cartItemExist.quantity  * product.price,
          },
        });
      } else {
        await prisma.cartItem.create({
          data: {
            productId,
            cartId: cartId.id,
            totalPrice: product.price * quantity,
          },
        });
      }
      return { status: "Product Added Successfully" };
    } catch (e) {}
  }
  async getCartItemCount(userId: string) {
    try {
      const cart = await prisma.cart.findFirstOrThrow({
        where: {
          userId,
        },
      });
      const count = await prisma.cartItem.aggregate({
        _sum: {
          quantity: true,
        },
        where: {
          cartId: cart.id,
        },
      });
      // console.log(count._sum.quantity);
      return count._sum.quantity;
    } catch (e) {
      return 0;
    }
  }
  async getCart(userId: string) {
    const cart = await prisma.cart.findFirst({ where: { userId } });
    const result = {};
    if (cart) {
      Object.assign(result, {
        cartTotal: cart.cartTotal,
        taxes: cart.taxes,
        shippingCharge: cart.shippingCharge,
      });
      const cartItems = await prisma.cartItem.findMany({
        where: {
          cartId: cart.id,
        },
        select: {
          product: {
            select: {
              id: true,
              productName: true,
              image: true,
              price: true,
            },
          },
          quantity: true,
          totalPrice: true,
        },
      });
      Object.assign(result, {
        cartItems,
      });
    }
    return result;
  }
}
