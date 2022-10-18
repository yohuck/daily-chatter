import { useDebugValue, useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import AnimatedCard from 'src/components/ResponseCardsCell/AnimatedResponse.js'
const CREATE_USERSUB_MUTATION = gql`
  mutation CreateUsersubInput($input: CreateUsersubInput!) {
    createUsersub(input: $input) {
      id
      userId
      topicId
    }
  }
`

const HomePageTopics = ({ topic, user }) => {
  const { currentUser } = useAuth()
  const [subbed, setSubbed] = useState('Subscribe')
  if (currentUser) {
    const userIdCheck = currentUser.id
    useEffect(() => {
      isSubbed(userIdCheck, topic)
    }, [])
  }

  const [usersub] = useMutation(CREATE_USERSUB_MUTATION)

  const renderCards = (topic) => {
    const cardStore = []
    for (let i = 0; i < topic.prompts[0].responses.length && i < 3; i++) {
      const card = (
        <AnimatedCard
          key={topic.prompts[0].responses[i].id}
          response={topic.prompts[0].responses[i]}
        />
      )
      cardStore.push(card)
    }
    return cardStore
  }

  const isSubbed = (userId, topic) => {
    if (
      topic.subscribedUser.filter((user) => user.userId == userId).length > 0
    ) {
      setSubbed('Subscribed')
    } else return false
  }

  const allTopicUpvotes = (topic) => {
    let total = 0
    if (topic.prompts != null)
      for (let i = 0; i < topic.prompts.length; i++) {
        const upCounter = topic.prompts[i].responses.reduce(
          (totalUpvotes, response) => {
            return response.upvotes + totalUpvotes
          },
          0
        )
        const superCounter = topic.prompts[i].responses.reduce(
          (totalUpvotes, response) => {
            return response.supervote + totalUpvotes
          },
          0
        )
        total = total + upCounter
        total = total + superCounter * 5

        total = total / 100

        return `$${total.toFixed(2)}`
      }
    else {
      return 0
    }
  }

  return (
    <div
      key={topic.id}
      dataclassname="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <div className="p2 z-10 mx-auto flex  w-min items-center gap-4 rounded-lg bg-slate-100 shadow dark:bg-neutral-900">
        <p className="text-2xl font-extrabold ">{topic.title}</p>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-user p-1 "></i>{' '}
          {topic.subscribedUser.length}
        </div>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-coin p-1"></i> {allTopicUpvotes(topic)}
        </div>
      </div>
      <h1 className="m-x-auto mb-3 mt-5 p-2 text-center text-3xl  font-bold">
        {topic.prompts[0].title}
      </h1>
      <p className="m-x-auto text-2x1 text-1x1 mb-3 mt-5 p-2 text-center font-bold">
        {topic.prompts[0].body}
      </p>
      <div className="container flex justify-center">
        <article className="flex flex-wrap justify-center gap-3">
          {renderCards(topic)}
        </article>
      </div>
      <Toaster />
      <button
        // userId to identify user model list and add subscribed topic to subscriptions list

        className="p2 z-10 m-4 mx-auto  flex w-min rounded-lg bg-slate-100 shadow dark:bg-neutral-900"
        onClick={() => {
          console.log(currentUser)
          if (currentUser) {
            const topicId = topic.id
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
  )
}

export default HomePageTopics
