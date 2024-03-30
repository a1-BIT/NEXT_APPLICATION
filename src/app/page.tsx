
import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <div>
      <h1>        Hellow World
      </h1>
      <div> <Link href='users'>users</Link></div>
      <ProductCart />
    </div>
  );
}
