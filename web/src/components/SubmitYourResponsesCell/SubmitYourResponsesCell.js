import PromptInput from '../PromptInput/PromptInput'

export const QUERY = gql`
  query findPrompts {
    prompts: prompts {
      id
      title
      body
      topicId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prompts }) => {
  console.log(prompts)
  return prompts.map((prompt) => (
    <div key={prompt.id} className="flex justify-center">
      <PromptInput prompt={prompt} />
    </div>
  ))
}
