export const schema = gql`
  type Post {
    id: Int!
    content: String!
    userId: Int!
    postingUser: User!
    postTopic: Topic!
    votes: [Vote]!
    postId: Int!
    topicId: Int
    reports: Int!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    content: String!
    userId: Int!
    postId: Int!
    topicId: Int!
    reports: Int!
  }

  input UpdatePostInput {
    content: String
    userId: Int
    postId: Int
    topicId: Int
    reports: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @skipAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @skipAuth
    deletePost(id: Int!): Post! @skipAuth
  }
`
