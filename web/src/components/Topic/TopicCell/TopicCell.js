import Topic from 'src/components/Topic/Topic'

export const QUERY = gql`
  query FindTopicById($id: Int!) {
    topic: topic(id: $id) {
      id
      title
      userSubscribed
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Topic not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ topic }) => {
  return <Topic topic={topic} />
}
