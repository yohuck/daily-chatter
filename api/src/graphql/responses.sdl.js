export const schema = gql`
  type Response {
    id: Int!
    User: User!
    userId: Int!
    prompt: Prompt!
    promptId: Int!
    body: String!
    createdAt: DateTime!
    upvotes: Int
    downvotes: Int
    reports: Int
    supervote: Int
  }

  type Query {
    responses: [Response!]! @skipAuth
    response(id: Int!): Response @skipAuth
  }

  input CreateResponseInput {
    userId: Int!
    promptId: Int!
    body: String!
    upvotes: Int
    downvotes: Int
    reports: Int
    supervote: Int
  }

  input UpdateResponseInput {
    userId: Int
    promptId: Int
    body: String
    upvotes: Int
    downvotes: Int
    reports: Int
    supervote: Int
  }

  type Mutation {
    createResponse(input: CreateResponseInput!): Response! @skipAuth
    updateResponse(id: Int!, input: UpdateResponseInput!): Response! @skipAuth
    deleteResponse(id: Int!): Response! @skipAuth
  }
`
