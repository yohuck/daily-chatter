import {
  messages,
  message,
  createMessage,
  updateMessage,
  deleteMessage,
} from './messages'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('messages', () => {
  scenario('returns all messages', async (scenario) => {
    const result = await messages()

    expect(result.length).toEqual(Object.keys(scenario.message).length)
  })

  scenario('returns a single message', async (scenario) => {
    const result = await message({ id: scenario.message.one.id })

    expect(result).toEqual(scenario.message.one)
  })

  scenario('creates a message', async () => {
    const result = await createMessage({
      input: { name: 'String', email: 'String', messageContent: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.messageContent).toEqual('String')
  })

  scenario('updates a message', async (scenario) => {
    const original = await message({ id: scenario.message.one.id })
    const result = await updateMessage({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a message', async (scenario) => {
    const original = await deleteMessage({
      id: scenario.message.one.id,
    })

    const result = await message({ id: original.id })

    expect(result).toEqual(null)
  })
})
