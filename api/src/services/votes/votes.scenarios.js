export const standard = defineScenario({
  vote: {
    one: {
      data: {
        upvote: true,
        downvote: true,
        totalUpVotes: 6078066,
        totalDownVotes: 3967327,
        superVotes: 5587568,
        totalVotes: 257941,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 174673,
                reports: 4968726,
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
            postId: 7730219,
            reports: 9908214,
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
        upvote: true,
        downvote: true,
        totalUpVotes: 4207560,
        totalDownVotes: 608099,
        superVotes: 1541528,
        totalVotes: 496637,
        responseVote: {
          create: {
            responseTitle: 'String',
            responseText: 'String',
            postResponse: {
              create: {
                content: 'String',
                postId: 1174524,
                reports: 6186037,
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
            postId: 9747860,
            reports: 4297825,
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
