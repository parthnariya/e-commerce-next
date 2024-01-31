import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="mx-16 my-3 flex flex-col gap-2 items-start h-full">
      <h2 className="text-xl text-b font-bold text-left">Shopping Cart</h2>
      <div className="flex w-full justify-center items-start gap-3 mt-8">
        <div className="w-4/6">
          <div className="table w-full  bg-white rounded-lg shadow-md p-6">
            <div className="table-row">
              <div className="table-cell">
                <h4 className="font-semibold text-left">Products</h4>
              </div>
              <div className="table-cell">
                <h4 className="font-semibold text-left">Price</h4>
              </div>
              <div className="table-cell">
                <h4 className="font-semibold text-left">Products</h4>
              </div>
              <div className="table-cell">
                <h4 className="font-semibold text-left">Products</h4>
              </div>
            </div>
            <CartItem />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-2/6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$19.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>$1.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2 ">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">$21.98</span>
          </div>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
