import Response from 'src/components/Response/Response'

export const QUERY = gql`
  query FindResponseById($id: Int!) {
    response: response(id: $id) {
      id
      userId
      promptId
      body
      createdAt
      upvotes
      downvotes
      reports
      supervote
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Response not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ response }) => {
  return <Response response={response} />
}
