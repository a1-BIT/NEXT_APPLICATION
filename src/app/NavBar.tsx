import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex bg-slate-50 p-5">
        <Link href='/' className="mr-5">Next.JS</Link>
        <Link href='/users'>Users</Link>
    </div>
  )
}
export default NavBar