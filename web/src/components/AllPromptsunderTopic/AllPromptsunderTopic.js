import { routes, Link } from '@redwoodjs/router'

const AllPrompts = ({ prompt }) => {
  return (
    <div
      key={prompt.id}
      DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <div className="p2 z-10 mx-auto flex  w-max items-center gap-4 rounded-lg text-center shadow">
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
