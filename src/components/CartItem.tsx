import Image from "next/image";

const CartItem = () => {
  return (
    <div className="table-row w-full">
      <div className="table-cell py-4">
        <div className="flex items-center">
          <Image
            src={"https://api.slingacademy.com/public/sample-photos/1.jpeg"}
            alt="image"
            width={500}
            height={500}
            className="h-16 w-16 mr-4 rounded-md"
          />
          <span className="font-semibold">Product Name</span>
        </div>
      </div>
      <div className="table-cell align-middle py-4 text-left">$ 20000</div>
      <div className="table-cell py-4 align-middle">
        <div className="flex items-center">
          <button className="border rounded-md py-2 px-4 mr-2">-</button>
          <span className="text-center w-8">2</span>
          <button className="border rounded-md py-2 px-4 ml-2">+</button>
        </div>
      </div>

      <div className="table-cell align-middle py-4 text-left">$ 40000</div>
    </div>
  );
};

export default CartItem;
