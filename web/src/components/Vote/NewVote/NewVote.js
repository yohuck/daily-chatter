import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VoteForm from 'src/components/Vote/VoteForm'

const CREATE_VOTE_MUTATION = gql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      id
    }
  }
`

const NewVote = () => {
  const [createVote, { loading, error }] = useMutation(CREATE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote created')
      navigate(routes.votes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createVote({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vote</h2>
      </header>
      <div className="rw-segment-main">
        <VoteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVote
