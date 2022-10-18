import { routes, Link } from '@redwoodjs/router'

const AllPrompts = ({ prompt }) => {
  return (
    <div
      key={prompt.id}
      DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <div className=" p2 z-10 my-5 mx-auto flex flex-wrap  max-w-md items-center gap-4 rounded-lg bg-white text-center shadow hover:bg-emerald-100 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        <Link to={routes.responsesToPrompt({ id: prompt.id })}>
          <p className="text-2xl font-extrabold ">{prompt.title}</p>
          <div>
            <p className="text-sm">{prompt.body}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AllPrompts
