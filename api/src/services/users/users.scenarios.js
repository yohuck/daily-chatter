export const standard = defineScenario({
  user: {
    one: { data: { hashedPassword: 'String', salt: 'String', admin: true } },
    two: { data: { hashedPassword: 'String', salt: 'String', admin: true } },
  },
})
