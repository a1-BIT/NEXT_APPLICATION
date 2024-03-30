import UserTable from "./UserTable"

interface Props {
  searchParams: {
    sortOrder: string
  }
}
const Users = async({searchParams: {sortOrder}}:Props) => {
  return (
    <>
    <h3>Users List</h3>
    
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}
export default Users