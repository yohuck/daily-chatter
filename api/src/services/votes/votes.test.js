import { votes, vote, createVote, updateVote, deleteVote } from './votes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('votes', () => {
  scenario('returns all votes', async (scenario) => {
    const result = await votes()

    expect(result.length).toEqual(Object.keys(scenario.vote).length)
  })

  scenario('returns a single vote', async (scenario) => {
    const result = await vote({ id: scenario.vote.one.id })

    expect(result).toEqual(scenario.vote.one)
  })

  scenario('creates a vote', async (scenario) => {
    const result = await createVote({
      input: {
        upvote: true,
        downvote: true,
        totalVotes: 2396214,
        postId: scenario.vote.two.postId,
        userId: scenario.vote.two.userId,
      },
    })

    expect(result.upvote).toEqual(true)
    expect(result.downvote).toEqual(true)
    expect(result.totalVotes).toEqual(2396214)
    expect(result.postId).toEqual(scenario.vote.two.postId)
    expect(result.userId).toEqual(scenario.vote.two.userId)
  })

  scenario('updates a vote', async (scenario) => {
    const original = await vote({ id: scenario.vote.one.id })
    const result = await updateVote({
      id: original.id,
      input: { upvote: false },
    })

    expect(result.upvote).toEqual(false)
  })

  scenario('deletes a vote', async (scenario) => {
    const original = await deleteVote({ id: scenario.vote.one.id })
    const result = await vote({ id: original.id })

    expect(result).toEqual(null)
  })
})
