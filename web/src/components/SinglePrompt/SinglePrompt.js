import { useDebugValue, useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { routes, Link } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import AnimatedCard from 'src/components/ResponseCardsCell/AnimatedResponse'
const CREATE_USERSUB_MUTATION = gql`
  mutation CreateUsersubInput($input: CreateUsersubInput!) {
    createUsersub(input: $input) {
      id
      userId
      topicId
    }
  }
`
const SinglePrompt = ({ prompt, user }) => {
  const { currentUser } = useAuth()
  const [subbed, setSubbed] = useState('Subscribe')
  if (currentUser) {
    const userIdCheck = currentUser.id
    const topicArray = []
    const topicNumber = prompt.topicId
    topicArray.push(topicNumber)
    useEffect(() => {
      isSubbed(userIdCheck, topicArray)
    }, [])
  }
  const [usersub] = useMutation(CREATE_USERSUB_MUTATION)
  console.log('Prompt CONSOLE LOG')
  console.log(prompt.topicId)
  const isSubbed = (userId, topicArray) => {
    console.log('Prompt CONSOLE LOG')
    console.log(topicArray)
    console.log('USER CONSOLE LOG')
    console.log(userId)
    if (topicArray.filter((user) => user.userId == userId).length > 0) {
      setSubbed('Subscribed')
    } else return false
  }
  const renderCards = (prompt) => {
    const cardStore = []
    for (let i = 0; i < prompt.responses.length; i++) {
      const card = (
        <AnimatedCard
          key={prompt.responses[i].id}
          response={prompt.responses[i]}
        />
      )
      cardStore.push(card)
    }
    return cardStore
  }
  return (
    <div
      key={prompt.id}
      DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <h1 className="m-x-auto mb-3 mt-5 p-2 text-center text-3xl  font-bold">
        {prompt.title}{' '}
      </h1>
      <p className="m-x-auto text-2x1 text-1x1 mb-3 mt-5 p-2 text-center font-bold">
        {prompt.body}
      </p>
      <div>
        <button
          // userId to identify user model list and add subscribed topic to subscriptions list
          className="p2 z-10 m-4 mx-auto  flex w-min rounded-lg shadow"
          onClick={() => {
            if (currentUser) {
              const topicId = prompt.topicId
              const userId = currentUser.id
              const input = {
                userId,
                topicId,
              }
              usersub({ variables: { input } })
              setSubbed('Subscribed')
            } else {
              toast('You need to be logged in to subscribe.')
            }
          }}
        >
          <p className="font-bold ">{subbed}</p>
        </button>
      </div>
      <div className="container flex justify-center">
        <article className="flex flex-wrap justify-center">
          {renderCards(prompt)}
        </article>
      </div>
    </div>
  )
}
export default SinglePrompt
