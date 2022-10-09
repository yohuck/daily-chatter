export const standard = defineScenario({
  topic: {
    one: {
      data: {
        title: 'String',
        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },
      },
    },

    two: {
      data: {
        title: 'String',
        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },
      },
    },
  },
})
