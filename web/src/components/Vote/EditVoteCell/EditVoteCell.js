import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VoteForm from 'src/components/Vote/VoteForm'

export const QUERY = gql`
  query EditVoteById($id: Int!) {
    vote: vote(id: $id) {
      id
      totalUpVotes
      totalDownVotes
      superVotes
      totalVotes
      responseId
      postId
      userId
    }
  }
`
const UPDATE_VOTE_MUTATION = gql`
  mutation UpdateVoteMutation($id: Int!, $input: UpdateVoteInput!) {
    updateVote(id: $id, input: $input) {
      id
      totalUpVotes
      totalDownVotes
      superVotes
      totalVotes
      responseId
      postId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vote }) => {
  const [updateVote, { loading, error }] = useMutation(UPDATE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote updated')
      navigate(routes.votes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateVote({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vote {vote?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VoteForm vote={vote} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
