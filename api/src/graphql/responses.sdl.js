export const schema = gql`
  type Response {
    id: Int!
    body: String!
    createdAt: DateTime!
    upvotes: Int!
    downvotes: Int!
    reports: Int!
    supervote: Int!
    prompt: Prompt!
    promptId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    responses: [Response!]! @skipAuth
    response(id: Int!): Response @skipAuth
  }

  input CreateResponseInput {
    body: String!
    upvotes: Int!
    downvotes: Int!
    reports: Int!
    supervote: Int!
    promptId: Int!
    userId: Int!
  }

  input UpdateResponseInput {
    body: String
    upvotes: Int
    downvotes: Int
    reports: Int
    supervote: Int
    promptId: Int
    userId: Int
  }

  type Mutation {
    createResponse(input: CreateResponseInput!): Response! @skipAuth
    updateResponse(id: Int!, input: UpdateResponseInput!): Response! @skipAuth
    deleteResponse(id: Int!): Response! @skipAuth
  }
`
