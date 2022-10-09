export const standard = defineScenario({
  response: {
    one: {
      data: {
        body: 'String',
        upvotes: 6090289,
        downvotes: 7976371,
        reports: 7710538,
        supervote: 543653,
        prompt: {
          create: {
            title: 'String',
            body: 'String',
            dispalyDate: 'String',
            topic: {
              create: {
                title: 'String',
                user: {
                  create: {
                    hashedPassword: 'String',
                    salt: 'String',
                    admin: true,
                  },
                },
              },
            },
          },
        },

        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },
      },
    },

    two: {
      data: {
        body: 'String',
        upvotes: 9457544,
        downvotes: 6128323,
        reports: 6238025,
        supervote: 8337776,
        prompt: {
          create: {
            title: 'String',
            body: 'String',
            dispalyDate: 'String',
            topic: {
              create: {
                title: 'String',
                user: {
                  create: {
                    hashedPassword: 'String',
                    salt: 'String',
                    admin: true,
                  },
                },
              },
            },
          },
        },

        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },
      },
    },
  },
})
