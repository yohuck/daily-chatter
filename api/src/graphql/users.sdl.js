export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String?
    hashedPassword: String?
    salt: String?
    password: String?
    posts: [Post]?
    votes: [Vote]?
    admin: Boolean?
    userId: Int?
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    admin: Boolean!
    userId: Int!
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
    admin: Boolean
    userId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
