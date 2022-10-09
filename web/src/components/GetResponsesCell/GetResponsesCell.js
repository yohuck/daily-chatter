import ResponseCards from 'src/components/ResponseCards/'

export const QUERY = gql`
  query GetResponsesQuery {
    getResponses: responses {
      id
      body
      upvotes
      downvotes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getResponses }) => {
  return getResponses.map((response) => (
    <ResponseCards key={response.id} responseCards={response} />
  ))
}
