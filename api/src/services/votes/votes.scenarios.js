export const standard = defineScenario({
  vote: {
    one: {
      data: {
        totalUpVotes: 6785365,
        totalDownVotes: 934134,
        superVotes: 9293821,
        totalVotes: 6466858,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 8527143,
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
            postId: 3296326,
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
        totalUpVotes: 9640444,
        totalDownVotes: 2804619,
        superVotes: 979018,
        totalVotes: 8249738,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 2292851,
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
            postId: 7166781,
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
