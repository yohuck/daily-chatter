import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Prompt/PromptsCell'

const DELETE_PROMPT_MUTATION = gql`
  mutation DeletePromptMutation($id: Int!) {
    deletePrompt(id: $id) {
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

const PromptsList = ({ prompts }) => {
  const [deletePrompt] = useMutation(DELETE_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('Prompt deleted')
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
    if (confirm('Are you sure you want to delete prompt ' + id + '?')) {
      deletePrompt({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Dispaly date</th>
            <th>Topic id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt) => (
            <tr key={prompt.id}>
              <td>{truncate(prompt.id)}</td>
              <td>{truncate(prompt.title)}</td>
              <td>{truncate(prompt.body)}</td>
              <td>{truncate(prompt.dispalyDate)}</td>
              <td>{truncate(prompt.topicId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.prompt({ id: prompt.id })}
                    title={'Show prompt ' + prompt.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPrompt({ id: prompt.id })}
                    title={'Edit prompt ' + prompt.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete prompt ' + prompt.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(prompt.id)}
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

export default PromptsList
