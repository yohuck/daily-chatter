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

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getPrompts }) => {
  return getPrompts.prompts.map((prompt) => (
    <AllPromptsunderTopic key={prompt.id} prompt={prompt} />
  ))
}
