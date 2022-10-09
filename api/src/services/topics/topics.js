import { db } from 'src/lib/db'

export const topics = () => {
  return db.topic.findMany()
}

export const topic = ({ id }) => {
  return db.topic.findUnique({
    where: { id },
  })
}

export const createTopic = ({ input }) => {
  return db.topic.create({
    data: input,
  })
}

export const updateTopic = ({ id, input }) => {
  return db.topic.update({
    data: input,
    where: { id },
  })
}

export const deleteTopic = ({ id }) => {
  return db.topic.delete({
    where: { id },
  })
}

export const Topic = {
  subscribedUser: (_obj, { root }) => {
    return db.topic.findUnique({ where: { id: root?.id } }).subscribedUser()
  },
  prompts: (_obj, { root }) => {
    return db.topic.findUnique({ where: { id: root?.id } }).prompts()
  },
}
