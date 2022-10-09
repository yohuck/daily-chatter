import { topics, topic, createTopic, updateTopic, deleteTopic } from './topics'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('topics', () => {
  scenario('returns all topics', async (scenario) => {
    const result = await topics()

    expect(result.length).toEqual(Object.keys(scenario.topic).length)
  })

  scenario('returns a single topic', async (scenario) => {
    const result = await topic({ id: scenario.topic.one.id })

    expect(result).toEqual(scenario.topic.one)
  })

  scenario('creates a topic', async () => {
    const result = await createTopic({
      input: { title: 'String' },
    })

    expect(result.title).toEqual('String')
  })

  scenario('updates a topic', async (scenario) => {
    const original = await topic({ id: scenario.topic.one.id })
    const result = await updateTopic({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a topic', async (scenario) => {
    const original = await deleteTopic({ id: scenario.topic.one.id })
    const result = await topic({ id: original.id })

    expect(result).toEqual(null)
  })
})
