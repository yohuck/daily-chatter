export const QUERY = gql`
  query ResponsesQuery {
    responses {
      id
      responseText
      responseTitle
      userId
      postId
    }
  }
`
//
const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ responses }) => {
  return (
    <>
      {console.log('success')}
      {jsonDisplay(responses)}
    </>
  )
}
