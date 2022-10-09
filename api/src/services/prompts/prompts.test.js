import {
  prompts,
  prompt,
  createPrompt,
  updatePrompt,
  deletePrompt,
} from './prompts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('prompts', () => {
  scenario('returns all prompts', async (scenario) => {
    const result = await prompts()

    expect(result.length).toEqual(Object.keys(scenario.prompt).length)
  })

  scenario('returns a single prompt', async (scenario) => {
    const result = await prompt({ id: scenario.prompt.one.id })

    expect(result).toEqual(scenario.prompt.one)
  })

  scenario('creates a prompt', async (scenario) => {
    const result = await createPrompt({
      input: {
        title: 'String',
        body: 'String',
        topicId: scenario.prompt.two.topicId,
        date: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.topicId).toEqual(scenario.prompt.two.topicId)
    expect(result.date).toEqual('String')
  })

  scenario('updates a prompt', async (scenario) => {
    const original = await prompt({ id: scenario.prompt.one.id })
    const result = await updatePrompt({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a prompt', async (scenario) => {
    const original = await deletePrompt({
      id: scenario.prompt.one.id,
    })

    const result = await prompt({ id: original.id })

    expect(result).toEqual(null)
  })
})
