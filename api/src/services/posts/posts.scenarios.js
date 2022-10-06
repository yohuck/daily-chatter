export const standard = defineScenario({
  post: {
    one: {
      data: {
        content: 'String',
        postId: 5929786,
        reports: 2774155,
        postingUser: { create: { hashedPassword: 'String', salt: 'String' } },
        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        content: 'String',
        postId: 8913670,
        reports: 4179077,
        postingUser: { create: { hashedPassword: 'String', salt: 'String' } },
        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },
  },
})
