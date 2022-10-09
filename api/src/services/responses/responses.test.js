import {
  responses,
  response,
  createResponse,
  updateResponse,
  deleteResponse,
} from './responses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('responses', () => {
  scenario('returns all responses', async (scenario) => {
    const result = await responses()

    expect(result.length).toEqual(Object.keys(scenario.response).length)
  })

  scenario('returns a single response', async (scenario) => {
    const result = await response({ id: scenario.response.one.id })

    expect(result).toEqual(scenario.response.one)
  })

  scenario('creates a response', async (scenario) => {
    const result = await createResponse({
      input: {
        userId: scenario.response.two.userId,
        promptId: scenario.response.two.promptId,
        body: 'String',
        upvotes: 1052328,
        downvotes: 7004827,
        reports: 6543534,
        supervote: 4658348,
      },
    })

    expect(result.userId).toEqual(scenario.response.two.userId)
    expect(result.promptId).toEqual(scenario.response.two.promptId)
    expect(result.body).toEqual('String')
    expect(result.upvotes).toEqual(1052328)
    expect(result.downvotes).toEqual(7004827)
    expect(result.reports).toEqual(6543534)
    expect(result.supervote).toEqual(4658348)
  })

  scenario('updates a response', async (scenario) => {
    const original = await response({
      id: scenario.response.one.id,
    })

    const result = await updateResponse({
      id: original.id,
      input: { body: 'String2' },
    })

    expect(result.body).toEqual('String2')
  })

  scenario('deletes a response', async (scenario) => {
    const original = await deleteResponse({
      id: scenario.response.one.id,
    })

    const result = await response({ id: original.id })

    expect(result).toEqual(null)
  })
})
