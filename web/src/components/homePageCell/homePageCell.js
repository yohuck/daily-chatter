import HomePageTopics from 'src/components/HomePageTopics'

export const QUERY = gql`
  query GetTopicsQuery {
    getTopics: topics {
      id
      title
      subscribedUser {
        userId
        id
        topicId
      }
      prompts {
        title
        body
        responses {
          id
          body
          upvotes
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

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getTopics }) => {
  return getTopics.map((topic) => (
    <HomePageTopics key={topic.id} topic={topic} />
  ))
}
