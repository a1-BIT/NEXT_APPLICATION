
interface User{
    id: number,
    name: string
}

const Users = async() => {

    const res =   await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
  return (
    <>
    <div>Users List</div>
    <ul>
    {users.map((user)=>{
        return (<>
            <div>{user.name}</div>
        </>)
    })}
    </ul>
    
    </>
  )
}
export default Users