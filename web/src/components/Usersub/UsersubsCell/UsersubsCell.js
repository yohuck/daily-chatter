import { Link, routes } from '@redwoodjs/router'

import Usersubs from 'src/components/Usersub/Usersubs'

export const QUERY = gql`
  query FindUsersubs {
    usersubs {
      id
      userId
      topicId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No usersubs yet. '}
      <Link to={routes.newUsersub()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usersubs }) => {
  return <Usersubs usersubs={usersubs} />
}
