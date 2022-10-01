export const schema = gql`
  type Topic {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    topics: [Topic!]! @requireAuth
    topic(id: Int!): Topic @requireAuth
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
    createTopic(input: CreateTopicInput!): Topic! @requireAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @requireAuth
    deleteTopic(id: Int!): Topic! @requireAuth
  }
`
