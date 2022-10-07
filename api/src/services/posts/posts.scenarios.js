export const standard = defineScenario({
  post: {
    one: {
      data: {
        content: 'String',
        postId: 6004051,
        postingUser: { create: { hashedPassword: 'String', salt: 'String' } },
        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        content: 'String',
        postId: 5163000,
        postingUser: { create: { hashedPassword: 'String', salt: 'String' } },
        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },
  },
})
