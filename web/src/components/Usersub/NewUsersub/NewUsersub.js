import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsersubForm from 'src/components/Usersub/UsersubForm'

const CREATE_USERSUB_MUTATION = gql`
  mutation CreateUsersubMutation($input: CreateUsersubInput!) {
    createUsersub(input: $input) {
      id
    }
  }
`

const NewUsersub = () => {
  const [createUsersub, { loading, error }] = useMutation(
    CREATE_USERSUB_MUTATION,
    {
      onCompleted: () => {
        toast.success('Usersub created')
        navigate(routes.usersubs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createUsersub({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Usersub</h2>
      </header>
      <div className="rw-segment-main">
        <UsersubForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUsersub
