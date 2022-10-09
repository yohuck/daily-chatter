export const schema = gql`
  type Prompt {
    id: Int!
    title: String!
    body: String!
    dispalyDate: String!
    topic: Topic!
    topicId: Int!
    responses: [Response]!
  }

  type Query {
    prompts: [Prompt!]! @skipAuth
    prompt(id: Int!): Prompt @skipAuth
  }

  input CreatePromptInput {
    title: String!
    body: String!
    dispalyDate: String!
    topicId: Int!
  }

  input UpdatePromptInput {
    title: String
    body: String
    dispalyDate: String
    topicId: Int
  }

  type Mutation {
    createPrompt(input: CreatePromptInput!): Prompt! @skipAuth
    updatePrompt(id: Int!, input: UpdatePromptInput!): Prompt! @skipAuth
    deletePrompt(id: Int!): Prompt! @skipAuth
  }
`
