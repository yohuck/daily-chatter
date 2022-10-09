import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResponseForm from 'src/components/Response/ResponseForm'

const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateResponseMutation($input: CreateResponseInput!) {
    createResponse(input: $input) {
      id
    }
  }
`

const NewResponse = () => {
  const [createResponse, { loading, error }] = useMutation(
    CREATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Response created')
        navigate(routes.responses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createResponse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Response</h2>
      </header>
      <div className="rw-segment-main">
        <ResponseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewResponse
