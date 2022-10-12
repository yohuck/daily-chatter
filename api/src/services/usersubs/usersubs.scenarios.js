export const standard = defineScenario({
  usersub: {
    one: {
      data: {
        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },

        topic: { create: { title: 'String' } },
      },
    },

    two: {
      data: {
        user: {
          create: { hashedPassword: 'String', salt: 'String', admin: true },
        },

        topic: { create: { title: 'String' } },
      },
    },
  },
})
