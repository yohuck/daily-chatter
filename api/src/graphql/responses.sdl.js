export const schema = gql`
  type Response {
    id: Int!
    postId: Int!
    postResponse: Post!
    responseTitle: String!
    responseText: String!
    votes: [Vote]!
    createdAt: DateTime!
    User: User
    userId: Int
  }

  type Query {
    responses: [Response!]! @requireAuth
    response(id: Int!): Response @requireAuth
  }

  input CreateResponseInput {
    postId: Int!
    responseTitle: String!
    responseText: String!
    userId: Int
  }

  input UpdateResponseInput {
    postId: Int
    responseTitle: String
    responseText: String
    userId: Int
  }

  type Mutation {
    createResponse(input: CreateResponseInput!): Response! @requireAuth
    updateResponse(id: Int!, input: UpdateResponseInput!): Response!
      @requireAuth
    deleteResponse(id: Int!): Response! @requireAuth
  }
`
