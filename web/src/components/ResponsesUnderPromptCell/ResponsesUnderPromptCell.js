import SinglePrompt from 'src/components/SinglePrompt'

export const QUERY = gql`
  query FindResponsesUnderPromptQuery($id: Int!) {
    responsesUnderPrompt: prompt(id: $id) {
      id
      title
      body
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ responsesUnderPrompt }) => {
  return (
    <SinglePrompt key={responsesUnderPrompt.id} prompt={responsesUnderPrompt} />
  )
}
