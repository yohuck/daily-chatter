import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  postingUser: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).postingUser()
  },
  postTopic: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).postTopic()
  },
  responses: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).responses()
  },
  Vote: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).Vote()
  },
}
