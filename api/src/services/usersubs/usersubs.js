import { db } from 'src/lib/db'

export const usersubs = () => {
  return db.usersub.findMany()
}

export const usersub = ({ id }) => {
  return db.usersub.findUnique({
    where: { id },
  })
}

export const createUsersub = ({ input }) => {
  return db.usersub.create({
    data: input,
  })
}

export const updateUsersub = ({ id, input }) => {
  return db.usersub.update({
    data: input,
    where: { id },
  })
}

export const deleteUsersub = ({ id }) => {
  return db.usersub.delete({
    where: { id },
  })
}

export const Usersub = {
  user: (_obj, { root }) => {
    return db.usersub.findUnique({ where: { id: root?.id } }).user()
  },
  topic: (_obj, { root }) => {
    return db.usersub.findUnique({ where: { id: root?.id } }).topic()
  },
}
