import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Usersub/UsersubsCell'

const DELETE_USERSUB_MUTATION = gql`
  mutation DeleteUsersubMutation($id: Int!) {
    deleteUsersub(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UsersubsList = ({ usersubs }) => {
  const [deleteUsersub] = useMutation(DELETE_USERSUB_MUTATION, {
    onCompleted: () => {
      toast.success('Usersub deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete usersub ' + id + '?')) {
      deleteUsersub({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Topic id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {usersubs.map((usersub) => (
            <tr key={usersub.id}>
              <td>{truncate(usersub.id)}</td>
              <td>{truncate(usersub.userId)}</td>
              <td>{truncate(usersub.topicId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.usersub({ id: usersub.id })}
                    title={'Show usersub ' + usersub.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUsersub({ id: usersub.id })}
                    title={'Edit usersub ' + usersub.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete usersub ' + usersub.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(usersub.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersubsList
