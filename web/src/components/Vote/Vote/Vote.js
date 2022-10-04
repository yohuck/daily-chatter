import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_VOTE_MUTATION = gql`
  mutation DeleteVoteMutation($id: Int!) {
    deleteVote(id: $id) {
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

const Vote = ({ vote }) => {
  const [deleteVote] = useMutation(DELETE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote deleted')
      navigate(routes.votes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vote ' + id + '?')) {
      deleteVote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vote {vote.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vote.id}</td>
            </tr>
            <tr>
              <th>Upvote</th>
              <td>{checkboxInputTag(vote.upvote)}</td>
            </tr>
            <tr>
              <th>Downvote</th>
              <td>{checkboxInputTag(vote.downvote)}</td>
            </tr>
            <tr>
              <th>Total votes</th>
              <td>{vote.totalVotes}</td>
            </tr>
            <tr>
              <th>Post id</th>
              <td>{vote.postId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{vote.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVote({ id: vote.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vote.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Vote
