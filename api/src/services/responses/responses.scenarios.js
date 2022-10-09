export const standard = defineScenario({
  response: {
    one: {
      data: {
        body: 'String',
        upvotes: 6203370,
        downvotes: 3928679,
        reports: 1018316,
        supervote: 3587938,
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
        upvotes: 9676913,
        downvotes: 6431913,
        reports: 1329795,
        supervote: 8680049,
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
