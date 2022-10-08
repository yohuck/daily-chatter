export const schema = gql`
  type Topic {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
    posts: [Post]!
  }

  type Query {
    topics: [Topic!]! @skipAuth
    topic(id: Int!): Topic @skipAuth
  }

  input CreateTopicInput {
    title: String!
    description: String!
  }

  input UpdateTopicInput {
    title: String
    description: String
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): Topic! @skipAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @skipAuth
    deleteTopic(id: Int!): Topic! @requireAuth
  }
`
