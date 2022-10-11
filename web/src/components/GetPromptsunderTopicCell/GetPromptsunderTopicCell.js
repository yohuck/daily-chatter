import AllPromptsunderTopic from 'src/components/AllPromptsunderTopic'

export const QUERY = gql`
  query GetPromptsQuery($id: Int!) {
    getPrompts: topic(id: $id) {
      id
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

export const Success = ({ getPrompts }) => {
  return getPrompts.prompts.map((prompt) => (
    <AllPromptsunderTopic key={prompt.id} prompt={prompt} />
  ))
}
