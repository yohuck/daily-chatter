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
        postId: scenario.response.two.postId,
        responseTitle: 'String',
        responseText: 'String',
      },
    })

    expect(result.postId).toEqual(scenario.response.two.postId)
    expect(result.responseTitle).toEqual('String')
    expect(result.responseText).toEqual('String')
  })

  scenario('updates a response', async (scenario) => {
    const original = await response({
      id: scenario.response.one.id,
    })

    const result = await updateResponse({
      id: original.id,
      input: { responseTitle: 'String2' },
    })

    expect(result.responseTitle).toEqual('String2')
  })

  scenario('deletes a response', async (scenario) => {
    const original = await deleteResponse({
      id: scenario.response.one.id,
    })

    const result = await response({ id: original.id })

    expect(result).toEqual(null)
  })
})
