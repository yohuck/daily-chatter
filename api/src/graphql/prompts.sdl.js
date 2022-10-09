export const schema = gql`
  type Prompt {
    id: Int!
    title: String!
    body: String!
    responses: [Response]!
    topic: Topic!
    topicId: Int!
    date: String!
  }

  type Query {
    prompts: [Prompt!]! @skipAuth
    prompt(id: Int!): Prompt @skipAuth
  }

  input CreatePromptInput {
    title: String!
    body: String!
    topicId: Int!
    date: String!
  }

  input UpdatePromptInput {
    title: String
    body: String
    topicId: Int
    date: String
  }

  type Mutation {
    createPrompt(input: CreatePromptInput!): Prompt! @skipAuth
    updatePrompt(id: Int!, input: UpdatePromptInput!): Prompt! @skipAuth
    deletePrompt(id: Int!): Prompt! @skipAuth
  }
`
