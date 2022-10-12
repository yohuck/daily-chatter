import {
  usersubs,
  usersub,
  createUsersub,
  updateUsersub,
  deleteUsersub,
} from './usersubs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('usersubs', () => {
  scenario('returns all usersubs', async (scenario) => {
    const result = await usersubs()

    expect(result.length).toEqual(Object.keys(scenario.usersub).length)
  })

  scenario('returns a single usersub', async (scenario) => {
    const result = await usersub({ id: scenario.usersub.one.id })

    expect(result).toEqual(scenario.usersub.one)
  })

  scenario('creates a usersub', async (scenario) => {
    const result = await createUsersub({
      input: {
        userId: scenario.usersub.two.userId,
        topicId: scenario.usersub.two.topicId,
      },
    })

    expect(result.userId).toEqual(scenario.usersub.two.userId)
    expect(result.topicId).toEqual(scenario.usersub.two.topicId)
  })

  scenario('updates a usersub', async (scenario) => {
    const original = await usersub({ id: scenario.usersub.one.id })
    const result = await updateUsersub({
      id: original.id,
      input: { userId: scenario.usersub.two.userId },
    })

    expect(result.userId).toEqual(scenario.usersub.two.userId)
  })

  scenario('deletes a usersub', async (scenario) => {
    const original = await deleteUsersub({
      id: scenario.usersub.one.id,
    })

    const result = await usersub({ id: original.id })

    expect(result).toEqual(null)
  })
})
