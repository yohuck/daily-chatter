export const schema = gql`
  type Topic {
    id: Int!
    title: String!
    userId: Int
    prompts: [Prompt]!
    subs: User
  }

  type Query {
    topics: [Topic!]! @skipAuth
    topic(id: Int!): Topic @skipAuth
  }

  input CreateTopicInput {
    title: String!
    userId: Int
  }

  input UpdateTopicInput {
    title: String
    userId: Int
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): Topic! @skipAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @skipAuth
    deleteTopic(id: Int!): Topic! @skipAuth
  }
`
