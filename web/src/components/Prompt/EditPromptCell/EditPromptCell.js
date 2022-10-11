import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PromptForm from 'src/components/Prompt/PromptForm'

export const QUERY = gql`
  query EditPromptById($id: Int!) {
    prompt: prompt(id: $id) {
      id
      title
      body
      topicId
      date
    }
  }
`
const UPDATE_PROMPT_MUTATION = gql`
  mutation UpdatePromptMutation($id: Int!, $input: UpdatePromptInput!) {
    updatePrompt(id: $id, input: $input) {
      id
      title
      body
      topicId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prompt }) => {
  const [updatePrompt, { loading, error }] = useMutation(
    UPDATE_PROMPT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Prompt updated')
        navigate(routes.prompts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePrompt({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Prompt {prompt?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PromptForm
          prompt={prompt}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
