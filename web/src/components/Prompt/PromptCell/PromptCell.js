import Prompt from 'src/components/Prompt/Prompt'

export const QUERY = gql`
  query FindPromptById($id: Int!) {
    prompt: prompt(id: $id) {
      id
      title
      body
      topicId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Prompt not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prompt }) => {
  return <Prompt prompt={prompt} />
}
