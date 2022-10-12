import { useAuth } from '@redwoodjs/auth'

import PromptInput from '../PromptInput/PromptInput'

export const QUERY = gql`
  query findPrompts {
    prompts: prompts {
      id
      title
      body
      topicId
      date
      responses {
        id
        userId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prompts }) => {
  const { currentUser } = useAuth()

  console.log(prompts)

  const filterTest = (prompt) => {
    return prompt.responses.every(
      (response) => response.userId != currentUser.id
    )
  }

  const filteredPrompts = prompts.filter((prompt) => filterTest(prompt))


  return filteredPrompts.map((prompt) => (
    <div key={prompt.id} className="flex justify-center">
      <PromptInput prompt={prompt} />
    </div>
  ))
}
