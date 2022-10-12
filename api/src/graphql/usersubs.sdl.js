export const schema = gql`
  type Usersub {
    id: Int!
    user: User!
    userId: Int!
    topic: Topic!
    topicId: Int!
  }

  type Query {
    usersubs: [Usersub!]! @skipAuth
    usersub(id: Int!): Usersub @skipAuth
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
    createUsersub(input: CreateUsersubInput!): Usersub! @skipAuth
    updateUsersub(id: Int!, input: UpdateUsersubInput!): Usersub! @skipAuth
    deleteUsersub(id: Int!): Usersub! @skipAuth
  }
`
