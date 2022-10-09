import { db } from 'src/lib/db'

export const prompts = () => {
  return db.prompt.findMany()
}

export const prompt = ({ id }) => {
  return db.prompt.findUnique({
    where: { id },
  })
}

export const createPrompt = ({ input }) => {
  return db.prompt.create({
    data: input,
  })
}

export const updatePrompt = ({ id, input }) => {
  return db.prompt.update({
    data: input,
    where: { id },
  })
}

export const deletePrompt = ({ id }) => {
  return db.prompt.delete({
    where: { id },
  })
}

export const Prompt = {
  responses: (_obj, { root }) => {
    return db.prompt.findUnique({ where: { id: root?.id } }).responses()
  },
  topic: (_obj, { root }) => {
    return db.prompt.findUnique({ where: { id: root?.id } }).topic()
  },
}
