export const schema = gql`
  type User {
    id: Int!
    username: String
    email: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    posts: [Post]!
    responseList: [Response]!
    votes: [Vote]!
    subscribedTopics: [Topic]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    username: String
    email: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
