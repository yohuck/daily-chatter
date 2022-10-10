import { useState } from 'react'

import { CSSTransition } from 'react-transition-group'

const AnimatedResponse = ({ response }) => {
  const [showMessage, setShowMessage] = useState(true)
  return (
    <CSSTransition
      in={showMessage}
      timeout={500}
      classNames="example"
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
            {console.log(response.supervote)}
            <p>{response.supervote}</p>
            <i className="fa-regular fa-bolt-lightning text-inidgo-500 p-1"></i>
          </div>
        </header>
        <p className="mt-2 text-sm">{response.body}</p>
        <div className=" mt-3 flex w-full justify-center">
          <button
            onClick={() => {
              setShowMessage(!showMessage)
            }}
            className="bg-white-100 m-2 flex items-center rounded-lg p-2 shadow transition-shadow hover:bg-yellow-100 hover:ring hover:ring-yellow-500 focus:bg-yellow-100 focus:ring focus:ring-yellow-500 dark:hover:bg-neutral-800"
          >
            <div className=" flex flex-col">
              <i className="fa-duotone fa-trash-can fa-2x p-1 text-gray-500"></i>
            </div>
          </button>
          <button
            onClick={() => {
              setShowMessage(!showMessage)
            }}
            className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-red-100 hover:ring hover:ring-red-500 focus:bg-red-100 focus:ring focus:ring-red-500 dark:hover:bg-neutral-800"
          >
            <div className=" flex flex-col">
              <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-red-500"></i>
            </div>
          </button>
          <button
            onClick={() => {
              setShowMessage(!showMessage)
            }}
            className="m-2 flex items-center rounded-lg p-2  shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500 dark:hover:bg-neutral-800"
          >
            <div className=" flex flex-col">
              <i className="fa-duotone fa-coin fa-2x p-1 text-emerald-500"></i>
            </div>
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}

export default AnimatedResponse
