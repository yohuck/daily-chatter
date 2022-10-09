import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResponseForm from 'src/components/Response/ResponseForm'

export const QUERY = gql`
  query EditResponseById($id: Int!) {
    response: response(id: $id) {
      id
      userId
      promptId
      body
      createdAt
      upvotes
      downvotes
      reports
      supervote
    }
  }
`
const UPDATE_RESPONSE_MUTATION = gql`
  mutation UpdateResponseMutation($id: Int!, $input: UpdateResponseInput!) {
    updateResponse(id: $id, input: $input) {
      id
      userId
      promptId
      body
      createdAt
      upvotes
      downvotes
      reports
      supervote
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ response }) => {
  const [updateResponse, { loading, error }] = useMutation(
    UPDATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Response updated')
        navigate(routes.responses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateResponse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Response {response?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ResponseForm
          response={response}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
