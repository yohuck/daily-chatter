import { Link, routes } from '@redwoodjs/router'

import Responses from 'src/components/Response/Responses'

export const QUERY = gql`
  query FindResponses {
    responses {
      id
      body
      createdAt
      upvotes
      downvotes
      reports
      supervote
      promptId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No responses yet. '}
      <Link to={routes.newResponse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ responses }) => {
  return <Responses responses={responses} />
}
