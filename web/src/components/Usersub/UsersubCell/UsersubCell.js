import Usersub from 'src/components/Usersub/Usersub'

export const QUERY = gql`
  query FindUsersubById($id: Int!) {
    usersub: usersub(id: $id) {
      id
      userId
      topicId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Usersub not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usersub }) => {
  return <Usersub usersub={usersub} />
}
