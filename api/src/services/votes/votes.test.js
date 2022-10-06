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
        totalUpVotes: 1984126,
        totalDownVotes: 5672548,
        superVotes: 7368625,
        totalVotes: 3329819,
        responseId: scenario.vote.two.responseId,
        postId: scenario.vote.two.postId,
        userId: scenario.vote.two.userId,
      },
    })

    expect(result.upvote).toEqual(true)
    expect(result.downvote).toEqual(true)
    expect(result.totalUpVotes).toEqual(1984126)
    expect(result.totalDownVotes).toEqual(5672548)
    expect(result.superVotes).toEqual(7368625)
    expect(result.totalVotes).toEqual(3329819)
    expect(result.responseId).toEqual(scenario.vote.two.responseId)
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
