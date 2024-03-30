interface Props {
    params: {id: number}
}

const UserDetailsPage = (props: Props) => {
  return (
    <>
  
    <div>UserDetailsPage</div>
    <div>
        {props.params.id}
    </div>
    </>
  )
}
export default UserDetailsPage