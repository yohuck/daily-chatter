import { db } from 'src/lib/db'

export const votes = () => {
  return db.vote.findMany()
}

export const vote = ({ id }) => {
  return db.vote.findUnique({
    where: { id },
  })
}

export const createVote = ({ input }) => {
  return db.vote.create({
    data: input,
  })
}

export const updateVote = ({ id, input }) => {
  return db.vote.update({
    data: input,
    where: { id },
  })
}

export const deleteVote = ({ id }) => {
  return db.vote.delete({
    where: { id },
  })
}

export const Vote = {
  responseVote: (_obj, { root }) => {
    return db.vote.findUnique({ where: { id: root?.id } }).responseVote()
  },
  userTotal: (_obj, { root }) => {
    return db.vote.findUnique({ where: { id: root?.id } }).userTotal()
  },
  Post: (_obj, { root }) => {
    return db.vote.findUnique({ where: { id: root?.id } }).Post()
  },
}
