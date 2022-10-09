import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_RESPONSE_MUTATION = gql`
  mutation DeleteResponseMutation($id: Int!) {
    deleteResponse(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Response = ({ response }) => {
  const [deleteResponse] = useMutation(DELETE_RESPONSE_MUTATION, {
    onCompleted: () => {
      toast.success('Response deleted')
      navigate(routes.responses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete response ' + id + '?')) {
      deleteResponse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Response {response.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{response.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{response.userId}</td>
            </tr>
            <tr>
              <th>Prompt id</th>
              <td>{response.promptId}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{response.body}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(response.createdAt)}</td>
            </tr>
            <tr>
              <th>Upvotes</th>
              <td>{response.upvotes}</td>
            </tr>
            <tr>
              <th>Downvotes</th>
              <td>{response.downvotes}</td>
            </tr>
            <tr>
              <th>Reports</th>
              <td>{response.reports}</td>
            </tr>
            <tr>
              <th>Supervote</th>
              <td>{response.supervote}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editResponse({ id: response.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(response.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Response
