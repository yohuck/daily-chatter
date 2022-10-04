import { Link, routes } from '@redwoodjs/router'

import Topics from 'src/components/Topic/Topics'

export const QUERY = gql`
  query FindTopics {
    topics {
      id
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No topics yet. '}
      <Link to={routes.newTopic()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ topics }) => {
  return <Topics topics={topics} />
}
