export const standard = defineScenario({
  response: {
    one: {
      data: {
        responseTitle: 'String',
        responseText: 'String',
        postResponse: {
          create: {
            content: 'String',
            postId: 2739458,
            reports: 809262,
            postingUser: {
              create: { hashedPassword: 'String', salt: 'String' },
            },

            postTopic: { create: { title: 'String', description: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        responseTitle: 'String',
        responseText: 'String',
        postResponse: {
          create: {
            content: 'String',
            postId: 2570445,
            reports: 5584638,
            postingUser: {
              create: { hashedPassword: 'String', salt: 'String' },
            },

            postTopic: { create: { title: 'String', description: 'String' } },
          },
        },
      },
    },
  },
})
