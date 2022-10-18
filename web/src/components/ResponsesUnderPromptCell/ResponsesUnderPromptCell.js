import SinglePrompt from 'src/components/SinglePrompt'
export const QUERY = gql`
  query FindResponsesUnderPromptQuery($id: Int!) {
    responsesUnderPrompt: prompt(id: $id) {
      id
      title
      body
      topicId
      responses {
        id
        body
        upvotes
        downvotes
        reports
        supervote
        createdAt
        User {
          id
          username
          subscriptions {
            userId
          }
          responses {
            id
            upvotes
            downvotes
            supervote
          }
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
export const Success = ({ responsesUnderPrompt }) => {
  return (
    <SinglePrompt key={responsesUnderPrompt.id} prompt={responsesUnderPrompt} />
  )
}
