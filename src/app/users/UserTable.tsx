import { sort } from "fast-sort"
import Link from "next/link"

interface User{
    id: number,
    name: string,
    email: string
}

interface Props {
    sortOrder: string
}
const UserTable = async({sortOrder}:Props) => {
    const res =   await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    const sortD = sort(users).asc((u)=> sortOrder === 'email' ? u.email : u.name)
  return (
    <div><table className="table table-border">
    <thead>
      <tr>
        <th className="hover:cursor-pointer">
          <Link href='/users?sortOrder=name'>Name</Link>
          </th>
        <th className="hover:cursor-pointer">
        <Link href='/users?sortOrder=email'>Email</Link>
          </th>
      </tr>
      </thead>
      <tbody>
      {sortD.map((user, index)=>{
      return (<>
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            </tr>
      </>)
  })}
      </tbody>
    
  
  </table></div>
  )
}
export default UserTable