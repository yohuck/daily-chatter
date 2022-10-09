import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TopicForm from 'src/components/Topic/TopicForm'

export const QUERY = gql`
  query EditTopicById($id: Int!) {
    topic: topic(id: $id) {
      id
      title
      userSubscribed
      userId
    }
  }
`
const UPDATE_TOPIC_MUTATION = gql`
  mutation UpdateTopicMutation($id: Int!, $input: UpdateTopicInput!) {
    updateTopic(id: $id, input: $input) {
      id
      title
      userSubscribed
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ topic }) => {
  const [updateTopic, { loading, error }] = useMutation(UPDATE_TOPIC_MUTATION, {
    onCompleted: () => {
      toast.success('Topic updated')
      navigate(routes.topics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTopic({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Topic {topic?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TopicForm
          topic={topic}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
