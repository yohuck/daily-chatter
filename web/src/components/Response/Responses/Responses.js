import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Response/ResponsesCell'

const DELETE_RESPONSE_MUTATION = gql`
  mutation DeleteResponseMutation($id: Int!) {
    deleteResponse(id: $id) {
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

const ResponsesList = ({ responses }) => {
  const [deleteResponse] = useMutation(DELETE_RESPONSE_MUTATION, {
    onCompleted: () => {
      toast.success('Response deleted')
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
    if (confirm('Are you sure you want to delete response ' + id + '?')) {
      deleteResponse({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Prompt id</th>
            <th>Body</th>
            <th>Created at</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
            <th>Reports</th>
            <th>Supervote</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.id}>
              <td>{truncate(response.id)}</td>
              <td>{truncate(response.userId)}</td>
              <td>{truncate(response.promptId)}</td>
              <td>{truncate(response.body)}</td>
              <td>{timeTag(response.createdAt)}</td>
              <td>{truncate(response.upvotes)}</td>
              <td>{truncate(response.downvotes)}</td>
              <td>{truncate(response.reports)}</td>
              <td>{truncate(response.supervote)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.response({ id: response.id })}
                    title={'Show response ' + response.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editResponse({ id: response.id })}
                    title={'Edit response ' + response.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete response ' + response.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(response.id)}
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

export default ResponsesList
