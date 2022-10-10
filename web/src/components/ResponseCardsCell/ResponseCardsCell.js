import AnimatedResponse from './AnimatedResponse'

export const QUERY = gql`
  query ResponsesQuery {
    responses {
      id
      body
      userId
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

export const Success = ({ responses }) => {
  return responses.map((response) => (
    <AnimatedResponse key={response.id} response={response} />
  ))
}
