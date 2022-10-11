import ResponseCard from 'src/components/ResponseCards'

const HomePageTopics = ({ topic }) => {
  const renderCards = (topic) => {
    const cardStore = []
    for (let i = 0; i < topic.prompts[0].responses.length && i < 3; i++) {
      const card = (
        <ResponseCard
          key={topic.prompts[0].responses[i].id}
          response={topic.prompts[0].responses[i]}
        />
      )
      cardStore.push(card)
    }
    return cardStore
  }

  return (
    <div
      key={topic.id}
      DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <div className="p2 z-10 mx-auto flex  w-min items-center gap-4 rounded-lg shadow">
        <p className="text-2xl font-extrabold ">{topic.title}</p>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-user p-1 "></i>{' '}
          {topic.subsrcibedUser || 0}
        </div>
        <div className="flex w-11/12 justify-between gap-1">
          <i className="fa-duotone fa-coin p-1"></i>{' '}
          {topic.prompts[0].responses.reduce((totalUpVotes, response) => {
            return response.upvotes + totalUpVotes
          }, 0)}
        </div>
      </div>
      <h1 className="m-x-auto mb-3 mt-5 p-2 text-center text-3xl  font-bold">
        {topic.prompts[0].title}{' '}
      </h1>
      <p className="m-x-auto text-2x1 text-1x1 mb-3 mt-5 p-2 text-center font-bold">
        {topic.prompts[0].body}
      </p>
      <div className="container flex justify-center">
        <article className="flex flex-wrap justify-center">
          {renderCards(topic)}
        </article>
      </div>
      <button className="p2 z-10 m-4 mx-auto  flex w-min rounded-lg shadow">
        <p className="font-bold">Subscribe</p>
      </button>
    </div>
  )
}

export default HomePageTopics
