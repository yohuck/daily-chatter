import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import LoopResponses from './LoopResponses'

export const QUERY = gql`
  query findPrompts {
    prompts: prompts {
      id
      title
      body
      topicId
      date
      responses {
        id
        userId
      }
    }
  }
`

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prompts }) => {
  const { currentUser } = useAuth()

  if (currentUser) {
    const filterTest = (prompt) => {
      return prompt.responses.every(
        (response) => response.userId != currentUser.id
      )
    }

    const filteredPrompts = prompts.filter((prompt) => filterTest(prompt))

    return (
      <div className="relative ">
        <LoopResponses filteredPrompts={filteredPrompts} />
        <div className="secret z-10">
          <div className="card maxy m-3 flex flex-col  rounded-lg bg-slate-100 p-8 text-center shadow dark:border-emerald-300 dark:bg-zinc-900 ">
            <p className="max-w-xs">
              You answered all the prompts for now! Go vote on other responses
              or hire one of the developers on this project 😀
            </p>

            <Link to={routes.home()} className="flex justify-center">
              <div className=" m-2 w-fit rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                <div className="">
                  {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                  <i className="fa-duotone fa-coin  p-1 text-emerald-500"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          You need to be{' '}
          <Link to={routes.login()} className="text-violet-500 underline">
            logged in
          </Link>{' '}
          to answer prompts.
        </p>
      </div>
    )
  }
}
