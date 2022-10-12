import SingleTopicCell from 'src/components/SingleTopicCell'
export const QUERY = gql`
  query UserSubsQuery($id: Int!) {
    singleUser: user(id: $id) {
      id
      username
      subscriptions {
        topicId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ singleUser }) => {
  return singleUser.subscriptions.map((topic) => (
    <SingleTopicCell key={topic.topicId} id={topic.topicId} />
  ))
}
