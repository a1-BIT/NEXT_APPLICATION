'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"


const NavBar = () => {
  const {status, data:session} = useSession()

  return (
    <div className="flex bg-slate-50 p-5 space-x-3">
        <Link href='/' className="">Next.JS</Link>
        <Link href='/users'>Users</Link>
        {
          
          status === 'authenticated' &&  <><div>{session.user?.name} </div> <Link href='/api/auth/signout'>Sign Out</Link></>
          
        }
        {
          status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>
        }
        
    </div>
  )
}
export default NavBar