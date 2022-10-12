import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsersubForm from 'src/components/Usersub/UsersubForm'

export const QUERY = gql`
  query EditUsersubById($id: Int!) {
    usersub: usersub(id: $id) {
      id
      userId
      topicId
    }
  }
`
const UPDATE_USERSUB_MUTATION = gql`
  mutation UpdateUsersubMutation($id: Int!, $input: UpdateUsersubInput!) {
    updateUsersub(id: $id, input: $input) {
      id
      userId
      topicId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usersub }) => {
  const [updateUsersub, { loading, error }] = useMutation(
    UPDATE_USERSUB_MUTATION,
    {
      onCompleted: () => {
        toast.success('Usersub updated')
        navigate(routes.usersubs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUsersub({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Usersub {usersub?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UsersubForm
          usersub={usersub}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
