import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_PROMPT_MUTATION = gql`
  mutation DeletePromptMutation($id: Int!) {
    deletePrompt(id: $id) {
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

const Prompt = ({ prompt }) => {
  const [deletePrompt] = useMutation(DELETE_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('Prompt deleted')
      navigate(routes.prompts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete prompt ' + id + '?')) {
      deletePrompt({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Prompt {prompt.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{prompt.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{prompt.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{prompt.body}</td>
            </tr>
            <tr>
              <th>Dispaly date</th>
              <td>{prompt.dispalyDate}</td>
            </tr>
            <tr>
              <th>Topic id</th>
              <td>{prompt.topicId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPrompt({ id: prompt.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(prompt.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prompt
