import Vote from 'src/components/Vote/Vote'

export const QUERY = gql`
  query FindVoteById($id: Int!) {
    vote: vote(id: $id) {
      id
      upvote
      downvote
      totalVotes
      postId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vote not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vote }) => {
  return <Vote vote={vote} />
}
