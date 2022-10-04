export const standard = defineScenario({
  vote: {
    one: {
      data: {
        upvote: true,
        downvote: true,
        totalVotes: 3345246,
        postVote: {
          create: {
            content: 'String',
            postId: 9168647,
            reports: 1474465,
            postingUser: {
              create: {
                username: 'String1073495',
                email: 'String300352',
                password: 'String',
                admin: true,
                userId: 5671690,
              },
            },

            postTopic: { create: { title: 'String', description: 'String' } },
          },
        },

        userTotal: {
          create: {
            username: 'String1607287',
            email: 'String1068771',
            password: 'String',
            admin: true,
            userId: 266455,
          },
        },
      },
    },

    two: {
      data: {
        upvote: true,
        downvote: true,
        totalVotes: 1545135,
        postVote: {
          create: {
            content: 'String',
            postId: 8705948,
            reports: 3977087,
            postingUser: {
              create: {
                username: 'String5644845',
                email: 'String1811352',
                password: 'String',
                admin: true,
                userId: 6733606,
              },
            },

            postTopic: { create: { title: 'String', description: 'String' } },
          },
        },

        userTotal: {
          create: {
            username: 'String3310818',
            email: 'String6941655',
            password: 'String',
            admin: true,
            userId: 958087,
          },
        },
      },
    },
  },
})
