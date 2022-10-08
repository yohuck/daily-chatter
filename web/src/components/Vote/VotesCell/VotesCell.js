import { Link, routes } from '@redwoodjs/router'

import Votes from 'src/components/Vote/Votes'

export const QUERY = gql`
  query FindVotes {
    votes {
      postId
      responseId
      totalVotes
      totalUpVotes
      totalDownVotes
      superVotes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No votes yet. '}
      <Link to={routes.newVote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ votes }) => {
  return <Votes votes={votes} />
}
