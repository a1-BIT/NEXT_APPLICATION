
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session  = await getServerSession(authOptions)
  return (
    <div>
      <h1>        {session?.user?.name}      </h1>
      <div> <Link href='users'>users</Link></div>
      <ProductCart />
    </div>
  );
}
