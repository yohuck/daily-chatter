import { useMutation } from '@redwoodjs/web'

import AnimatedResponse from './AnimatedResponse'

export const QUERY = gql`
  query ResponsesQuery {
    responses {
      id
      body
      userId
      upvotes
      downvotes
      supervote
    }
  }
`
export const VOTE_QUERY = gql`
  query EditResponseById($id: Int!) {
    response: response(id: $id) {
      id
      upvotes
      downvotes
      reports
      supervote
    }
  }
`
const UPDATE_VOTE_MUTATION = gql`
  mutation UpdateResponseMutation($id: Int!, $input: UpdateResponseInput!) {
    updateResponse(id: $id, input: $input) {
      id
      upvotes
      downvotes
      reports
      supervote
    }
  }
`

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ responses }) => {
  const [updateResponse] = useMutation(UPDATE_VOTE_MUTATION)

  const onSave = (input, id) => {
    updateResponse({ variables: { id, input } })
  }
  return responses.map((response) => (
    <AnimatedResponse onSave={onSave} key={response.id} response={response} />
  ))
}
