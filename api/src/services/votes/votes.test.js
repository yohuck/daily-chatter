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
        totalUpVotes: 856200,
        totalDownVotes: 3979140,
        superVotes: 4532015,
        totalVotes: 2120539,
        responseId: scenario.vote.two.responseId,
        postId: scenario.vote.two.postId,
        userId: scenario.vote.two.userId,
      },
    })

    expect(result.totalUpVotes).toEqual(856200)
    expect(result.totalDownVotes).toEqual(3979140)
    expect(result.superVotes).toEqual(4532015)
    expect(result.totalVotes).toEqual(2120539)
    expect(result.responseId).toEqual(scenario.vote.two.responseId)
    expect(result.postId).toEqual(scenario.vote.two.postId)
    expect(result.userId).toEqual(scenario.vote.two.userId)
  })

  scenario('updates a vote', async (scenario) => {
    const original = await vote({ id: scenario.vote.one.id })
    const result = await updateVote({
      id: original.id,
      input: { totalUpVotes: 878651 },
    })

    expect(result.totalUpVotes).toEqual(878651)
  })

  scenario('deletes a vote', async (scenario) => {
    const original = await deleteVote({ id: scenario.vote.one.id })
    const result = await vote({ id: original.id })

    expect(result).toEqual(null)
  })
})
