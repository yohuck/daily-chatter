import AllPromptsunderTopic from 'src/components/AllPromptsunderTopic'

const promptCards = (prompts) => {
  return prompts.map((prompt) => (
    <AllPromptsunderTopic key={prompt.id} prompt={prompt} />
  ))
}

const SingleTopic = (topic) => {
  return (
    <li>
      <div
        key={topic.id}
        DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
      >
        <div className="p2 z-10 mx-auto flex  w-min items-center gap-4 rounded-lg shadow">
          <p className="text-2xl font-extrabold ">{topic.topic.title}</p>
          <div className="flex w-11/12 justify-between gap-1"></div>
          <div className="flex w-11/12 justify-between gap-1"></div>
        </div>
      </div>
      {promptCards(topic.topic.prompts)}
    </li>
  )
}

export default SingleTopic
