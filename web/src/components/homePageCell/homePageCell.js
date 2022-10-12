import HomePageTopics from 'src/components/HomePageTopics'

export const QUERY = gql`
  query GetTopicsQuery {
    getTopics: topics {
      id
      title
      subscribedUser {
        id
        topicId
      }
      prompts {
        title
        body
        responses {
          id
          body
          User {
            username
            email
            responses {
              upvotes
              downvotes
              supervote
            }
          }
          userId
          upvotes
          downvotes
          supervote
          reports
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

export const Success = ({ getTopics }) => {
  return getTopics.map((topic) => (
    <HomePageTopics key={topic.id} topic={topic} />
  ))
}
