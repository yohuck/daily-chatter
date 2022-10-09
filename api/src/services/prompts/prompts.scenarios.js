export const standard = defineScenario({
  prompt: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        dispalyDate: 'String',
        topic: {
          create: {
            title: 'String',
            user: {
              create: { hashedPassword: 'String', salt: 'String', admin: true },
            },
          },
        },
      },
    },

    two: {
      data: {
        title: 'String',
        body: 'String',
        dispalyDate: 'String',
        topic: {
          create: {
            title: 'String',
            user: {
              create: { hashedPassword: 'String', salt: 'String', admin: true },
            },
          },
        },
      },
    },
  },
})
