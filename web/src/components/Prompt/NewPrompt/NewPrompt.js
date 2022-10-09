import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PromptForm from 'src/components/Prompt/PromptForm'

const CREATE_PROMPT_MUTATION = gql`
  mutation CreatePromptMutation($input: CreatePromptInput!) {
    createPrompt(input: $input) {
      id
    }
  }
`

const NewPrompt = () => {
  const [createPrompt, { loading, error }] = useMutation(
    CREATE_PROMPT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Prompt created')
        navigate(routes.prompts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPrompt({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Prompt</h2>
      </header>
      <div className="rw-segment-main">
        <PromptForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrompt
