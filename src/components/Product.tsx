import Image from "next/image";

type ProductPropsType = {
  id: string;
  title: string;
  price: string;
  image: string;
};
const Product = (props: ProductPropsType) => {
  return (
    <div className="flex">
      <figure>
        <Image src={props.image} alt={props.title} />
        <figcaption>
          <p>{props.title}</p>
          <div>
            <label>{props.price}</label>
            <button>Add to Cart</button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Product;
