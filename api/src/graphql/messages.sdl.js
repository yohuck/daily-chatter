export const schema = gql`
  type Message {
    id: Int!
    name: String!
    email: String!
    messageContent: String!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @skipAuth
    message(id: Int!): Message @skipAuth
  }

  input CreateMessageInput {
    name: String!
    email: String!
    messageContent: String!
  }

  input UpdateMessageInput {
    name: String
    email: String
    messageContent: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @skipAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
