import Image from "next/image";

type CartItemPropType = {
  product: {
    id: string;
    image: string;
    price: number;
    productName: string;
  };
  quantity: number;
  totalPrice: number;
};

const CartItem = ({ product, quantity, totalPrice }: CartItemPropType) => {
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
          <button className="border rounded-md py-2 px-4 ml-2">+</button>
        </div>
      </div>

      <div className="table-cell align-middle py-4 text-left">
        $ {totalPrice}
      </div>
    </div>
  );
};

export default CartItem;
