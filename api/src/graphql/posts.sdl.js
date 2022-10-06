export const schema = gql`
  type Post {
    id: Int!
    content: String!
    userId: Int!
    postingUser: User!
    postTopic: Topic!
    responses: [Response]!
    postId: Int!
    topicId: Int!
    reports: Int!
    Vote: [Vote]!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
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
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
