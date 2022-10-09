export const schema = gql`
  type Topic {
    id: Int!
    title: String!
    userSubscribed: Boolean!
    subscribedUser: User
    userId: Int
    prompts: [Prompt]!
  }

  type Query {
    topics: [Topic!]! @skipAuth
    topic(id: Int!): Topic @skipAuth
  }

  input CreateTopicInput {
    title: String!
    userSubscribed: Boolean
    userId: Int
  }

  input UpdateTopicInput {
    title: String
    userSubscribed: Boolean
    userId: Int
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): Topic! @skipAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @skipAuth
    deleteTopic(id: Int!): Topic! @skipAuth
  }
`
