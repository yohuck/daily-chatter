export const standard = defineScenario({
  response: {
    one: {
      data: {
        body: 'String',
        upvotes: 7992131,
        downvotes: 151426,
        reports: 7512555,
        supervote: 66391,
        User: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },

        prompt: {
          create: {
            title: 'String',
            body: 'String',
            date: 'String',
            topic: { create: { title: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        body: 'String',
        upvotes: 7318414,
        downvotes: 3860969,
        reports: 4014416,
        supervote: 1097587,
        User: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },

        prompt: {
          create: {
            title: 'String',
            body: 'String',
            date: 'String',
            topic: { create: { title: 'String' } },
          },
        },
      },
    },
  },
})
