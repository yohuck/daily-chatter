export const standard = defineScenario({
  post: {
    one: {
      data: {
        content: 'String',
        postId: 7432123,
        reports: 4752345,
        postingUser: {
          create: {
            username: 'String56835',
            email: 'String9183268',
            password: 'String',
            admin: true,
            userId: 5984155,
          },
        },

        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },

    two: {
      data: {
        content: 'String',
        postId: 707194,
        reports: 5019775,
        postingUser: {
          create: {
            username: 'String989592',
            email: 'String4389992',
            password: 'String',
            admin: true,
            userId: 5301772,
          },
        },

        postTopic: { create: { title: 'String', description: 'String' } },
      },
    },
  },
})
