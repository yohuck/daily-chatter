import AllTopics from 'src/components/AllTopics'

export const QUERY = gql`
  query OnlyTopicsQuery {
    onlyTopics: topics {
      id
      title
      subscribedUser {
        id
        username
      }
      prompts {
        id
        title
        responses {
          upvotes
          supervote
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ onlyTopics }) => {
  console.log(onlyTopics)
  return onlyTopics.map((topic) => <AllTopics key={topic.id} topic={topic} />)
}
