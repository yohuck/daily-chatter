import { useState } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const UPDATE_VOTE_MUTATION = gql`
  mutation UpdateResponseMutationtwo($id: Int!, $input: UpdateResponseInput!) {
    updateResponse(id: $id, input: $input) {
      id
      upvotes
      downvotes
      supervote
      reports
    }
  }
`

const AnimatedResponse = ({ response }) => {
  const { currentUser } = useAuth()
  const [showMessage, setShowMessage] = useState(true)
  const [showTrashMessage, setShowTrashMessage] = useState(true)
  const [showReportMessage, setShowReportMessage] = useState(true)
  const [updateResponse] = useMutation(UPDATE_VOTE_MUTATION)

  const userTotalUpVotes = (response) => {
    let total = 0
    if (response.User.responses != null) {
      const upCounter = response.User.responses.reduce(
        (totalUpvotes, response) => {
          return response.upvotes + totalUpvotes
        },
        0
      )

      const downCounter = response.User.responses.reduce(
        (totalUpvotes, response) => {
          return response.downvotes + totalUpvotes
        },
        0
      )

      const superCounter = response.User.responses.reduce(
        (totalUpvotes, response) => {
          return response.supervote + totalUpvotes
        },
        0
      )
      total = total + upCounter
      total = total + superCounter * 5
      total = total - downCounter

      total = total / 100

      return `$${total.toFixed(2)}`
    } else {
      return ' '
    }
  }

  return (
    <CSSTransition
      in={showMessage}
      timeout={500}
      classNames="coin"
      unmountOnExit
    >
      <CSSTransition
        in={showTrashMessage}
        timeout={500}
        classNames="trash"
        unmountOnExit
      >
        <CSSTransition
          in={showReportMessage}
          timeout={500}
          classNames="report"
          unmountOnExit
        >
          <div className="maxy cardwidth relative my-2 flex flex-col justify-between rounded-lg bg-slate-100 p-8 shadow dark:border-emerald-300 dark:bg-zinc-900">
            <Toaster />
            <div className="absolute  bottom-0 left-0 m-1 rounded bg-emerald-200 px-2 opacity-75 dark:text-zinc-900">
              {userTotalUpVotes(response)}
            </div>
            <header className="center mb-2 flex justify-between gap-5">
              <h2 className="break-words font-bold text-xs">
                {response.User.username}
              </h2>
              <div className="icons mb-3 flex gap-2 flex-wrap  border-black p-3 ">
                <p>{response.downvotes}</p>
                <i className="fa-duotone fa-trash-can p-1 text-gray-500"></i>
                <p>{response.upvotes}</p>
                <i className="fa-duotone fa-sack-dollar p-1 text-indigo-500"></i>
                <p>{response.supervote}</p>
                <i className="fa-duotone fa-coins p-1 text-emerald-500"></i>
                <p>{response.reports}</p>
                <i className="fa-duotone fa-do-not-enter p-1 text-amber-500"></i>
              </div>
            </header>
            <p className="mt-2 text-sm">{response.body}</p>
            <div className=" mt-3 flex w-full justify-center">
              <button
                onClick={() => {
                  if (currentUser) {
                    const id = response.id
                    let downvote = response.downvotes + 1
                    const input = {
                      downvotes: downvote,
                    }
                    updateResponse({ variables: { id, input } })
                    setShowTrashMessage(!showMessage)
                  } else {
                    toast('You need to be logged in to vote.')
                  }
                }}
                className="m-2 flex items-center rounded-lg p-2 shadow transition-shadow hover:bg-gray-100 hover:ring hover:ring-gray-500 focus:bg-gray-100 focus:ring focus:ring-gray-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-trash-can fa-2x p-1 text-gray-500"></i>
                </div>
              </button>
              <button
                onClick={() => {
                  if (currentUser) {
                    const id = response.id
                    let upvote = response.upvotes + 1
                    const input = {
                      upvotes: upvote,
                    }
                    setShowMessage(!showMessage)
                    updateResponse({ variables: { id, input } })
                  } else {
                    toast('You need to be logged in to vote.')
                  }
                }}
                className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-indigo-100 hover:ring hover:ring-indigo-500 focus:bg-indigo-100 focus:ring focus:ring-indigo-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-thumbs-up fa-2x p-1 text-indigo-500"></i>
                </div>
              </button>

              <button
                // data-id={response.id}
                onClick={() => {
                  if (currentUser) {
                    const id = response.id
                    let superUpVote = response.supervote + 1
                    console.log(response.supervote)
                    const input = {
                      supervote: superUpVote,
                    }
                    setShowMessage(!showMessage)
                    updateResponse({ variables: { id, input } })
                  } else {
                    toast('You need to be logged in to vote.')
                  }
                }}
                className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-coins fa-2x p-1 text-emerald-500"></i>
                </div>
              </button>
              <button
                // data-id={response.id}
                onClick={() => {
                  if (currentUser) {
                    const id = response.id
                    console.log(response)
                    let reported = response.reports + 1
                    const input = {
                      reports: reported,
                    }
                    setShowReportMessage(!showReportMessage)
                    setShowMessage(!showMessage)
                    updateResponse({ variables: { id, input } })
                  } else {
                    toast('You need to be logged in to vote.')
                  }
                }}
                className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-amber-100 hover:ring hover:ring-amber-500 focus:bg-amber-100 focus:ring focus:ring-amber-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-amber-500"></i>
                </div>
              </button>
            </div>
          </div>
        </CSSTransition>
      </CSSTransition>
    </CSSTransition>
  )
}

export default AnimatedResponse
