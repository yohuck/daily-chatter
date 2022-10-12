import SingleTopic from 'src/components/SingleTopic'

export const QUERY = gql`
  query FindSingleTopicQuery($id: Int!) {
    singleTopic: topic(id: $id) {
      id
      title
      prompts {
        id
        title
        body
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ singleTopic }) => {
  return <SingleTopic topic={singleTopic} />
}
