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

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ singleUser }) => {
  return singleUser.subscriptions.map((topic) => (
    <SingleTopicCell key={topic.topicId} id={topic.topicId} />
  ))
}
