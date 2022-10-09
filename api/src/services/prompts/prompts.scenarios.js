export const standard = defineScenario({
  prompt: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        date: 'String',
        topic: { create: { title: 'String' } },
      },
    },

    two: {
      data: {
        title: 'String',
        body: 'String',
        date: 'String',
        topic: { create: { title: 'String' } },
      },
    },
  },
})
