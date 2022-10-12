export const schema = gql`
  type Usersub {
    id: Int!
    user: User!
    userId: Int!
    topic: Topic!
    topicId: Int!
  }

  type Query {
    usersubs: [Usersub!]! @requireAuth
    usersub(id: Int!): Usersub @requireAuth
  }

  input CreateUsersubInput {
    userId: Int!
    topicId: Int!
  }

  input UpdateUsersubInput {
    userId: Int
    topicId: Int
  }

  type Mutation {
    createUsersub(input: CreateUsersubInput!): Usersub! @requireAuth
    updateUsersub(id: Int!, input: UpdateUsersubInput!): Usersub! @requireAuth
    deleteUsersub(id: Int!): Usersub! @requireAuth
  }
`
