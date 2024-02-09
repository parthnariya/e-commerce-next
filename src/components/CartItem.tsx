import Image from "next/image";
import { MouseEventHandler } from "react";
type CartItemPropType = {
  product: {
    id: string;
    image: string;
    price: number;
    productName: string;
  };
  quantity: number;
  totalPrice: number;
  addToCartHandler: (productId: string) => Promise<void>;
};

const CartItem = ({
  product,
  quantity,
  totalPrice,
  addToCartHandler,
}: CartItemPropType) => {
  const addToCartClickHandler: MouseEventHandler = async (e) => {
    e.preventDefault();
    await addToCartHandler(product.id);
  };
  return (
    <div className="table-row w-full">
      <div className="table-cell py-4">
        <div className="flex items-center">
          <Image
            src={product.image}
            alt="image"
            width={500}
            height={500}
            className="h-16 w-16 mr-4 rounded-md"
          />
          <span className="font-semibold">{product.productName}</span>
        </div>
      </div>
      <div className="table-cell align-middle py-4 text-left">
        $ {product.price}
      </div>
      <div className="table-cell py-4 align-middle">
        <div className="flex items-center">
          <button className="border rounded-md py-2 px-4 mr-2">-</button>
          <span className="text-center w-8">{quantity}</span>
          <button
            className="border rounded-md py-2 px-4 ml-2"
            onClick={addToCartClickHandler}
          >
            +
          </button>
        </div>
      </div>

      <div className="table-cell align-middle py-4 text-left">
        $ {totalPrice}
      </div>
    </div>
  );
};

export default CartItem;
