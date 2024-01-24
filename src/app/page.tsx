import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
// import DummyMobile from "";
const Home = () => {
  return (
    <div className="mx-16 my-3">
      <div className="grid grid-cols-4 gap-5 ">
        <Product
          id="1"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="2"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="3"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="4"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
        <Product
          id="5"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
          price="20000"
          title="Pixel 7"
        />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
