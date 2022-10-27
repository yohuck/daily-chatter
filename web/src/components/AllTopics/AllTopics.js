import { routes, Link } from '@redwoodjs/router'

const AllTopics = ({ topic }) => {
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
      className="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <div className="p2 z-10 mx-auto flex  w-min items-center gap-4 rounded-lg bg-white shadow hover:bg-emerald-100 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        <Link to={routes.choosePrompt({ id: topic.id })}>
          <p className="text-2xl font-extrabold ">{topic.title}</p>
        </Link>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-user p-1 "></i>{' '}
          {topic.subsrcibedUsers || 0}
        </div>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-coin p-1"></i> {allTopicUpvotes(topic)}
        </div>
      </div>
    </div>
  )
}

export default AllTopics
