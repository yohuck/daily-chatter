import { useState } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query EditResponseById($id: Int!) {
    response: response(id: $id) {
      id
      upvotes
    }
  }
`

const UPDATE_RESPONSE_MUTATION = gql`
  mutation UpdateResponseMutation($id: Int!, $input: UpdateResponseInput!) {
    updateResponse(id: $id, input: $input) {
      id
      upvotes
    }
  }
`

const AnimatedResponse = ({ response }) => {
  const [updateResponse, { loading, error }] = useMutation(
    UPDATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        console.log('nice')
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
  const [showMessage, setShowMessage] = useState(true)
  const [showTrashMessage, setShowTrashMessage] = useState(true)
  const [showReportMessage, setShowReportMessage] = useState(true)
  const [updateResponse] = useMutation(UPDATE_VOTE_MUTATION)

  const onSave = (input, id) => {
    // updateResponse(6,  input: 5 )
  }

  const onSubmit = (data) => {
    console.log('postId: ' + response?.id)
    console.log('votes:', data)
    console.log('props', props)
    // props.onSave(data, response?.id)
  }
  return (
    // <Form onSubmit={onSubmit}>
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
          <div className="maxy cardwidth relative m-3 flex flex-col justify-between rounded-lg p-8 shadow dark:border-emerald-300 dark:bg-zinc-900">
            <div className="absolute  bottom-0 left-0 m-1 rounded bg-emerald-200 px-2 opacity-75 dark:text-zinc-900">
              {response.userId}
            </div>
            <header className="center mb-2 flex justify-between gap-5">
              <h2 className="break-words font-bold">{response.userId}</h2>
              <div className="icons mb-3 flex gap-2  border-black  p-3">
                <p>{response.upvotes}</p>
                <i className="fa-duotone fa-sack-dollar p-1 text-emerald-500"></i>
                <p>{response.downvotes}</p>
                <i className="fa-duotone fa-sack-dollar p-1 text-indigo-500"></i>
                <p>{response.supervote}</p>
                <i className="fa-duotone fa-coins p-1 text-indigo-500"></i>
              </div>
            </header>
            <p className="mt-2 text-sm">{response.body}</p>
            <div className=" mt-3 flex w-full justify-center">
              <button
                onClick={(e) => {
                  console.log(e.target.upvotes)
                  setShowTrashMessage(!showMessage)
                  console.log('upvotes ' + incrementValue(response.upvotes))
                }}
                className="m-2 flex items-center rounded-lg p-2 shadow transition-shadow hover:bg-yellow-100 hover:ring hover:ring-yellow-500 focus:bg-yellow-100 focus:ring focus:ring-yellow-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-trash-can fa-2x p-1 text-gray-500"></i>
                </div>
              </button>
              <button
                name="upvotes"
                onClick={() => {
                  setShowReportMessage(!showReportMessage)
                  console.log('downvotes ' + incrementValue(response.downvotes))
                }}
                className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-red-100 hover:ring hover:ring-red-500 focus:bg-red-100 focus:ring focus:ring-red-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-red-500"></i>
                </div>
              </button>

              <button
                data-id={response.id}
                onClick={() => {
                  const id = response.id
                  const input = {
                    upvotes: 10,
                  }
                  setShowMessage(!showMessage)
                  updateResponse({ variables: { id, input } })
                }}
                className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                {/* <NumberField name="supervote" /> */}
                <div className=" flex flex-col">
                  <i className="fa-duotone fa-coin fa-2x p-1 text-emerald-500"></i>
                </div>
              </button>
            </div>
          </div>
        </CSSTransition>
      </CSSTransition>
    </CSSTransition>
    // </Form>
  )
}

export default AnimatedResponse
