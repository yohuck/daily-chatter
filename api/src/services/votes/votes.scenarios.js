export const standard = defineScenario({
  vote: {
    one: {
      data: {
        totalUpVotes: 5239050,
        totalDownVotes: 4958796,
        superVotes: 9486444,
        totalVotes: 3550718,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 343981,
                postingUser: {
                  create: { hashedPassword: 'String', salt: 'String' },
                },

                postTopic: {
                  create: { title: 'String', description: 'String' },
                },
              },
            },
          },
        },

        userTotal: { create: { hashedPassword: 'String', salt: 'String' } },
        Post: {
          create: {
            content: 'String',
            postId: 7338061,
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
        totalUpVotes: 4327298,
        totalDownVotes: 1969796,
        superVotes: 6077652,
        totalVotes: 1902779,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 2340419,
                postingUser: {
                  create: { hashedPassword: 'String', salt: 'String' },
                },

                postTopic: {
                  create: { title: 'String', description: 'String' },
                },
              },
            },
          },
        },

        userTotal: { create: { hashedPassword: 'String', salt: 'String' } },
        Post: {
          create: {
            content: 'String',
            postId: 2894332,
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
