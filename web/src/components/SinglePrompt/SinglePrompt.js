import { routes, Link } from '@redwoodjs/router'

import AnimatedCard from 'src/components/ResponseCardsCell/AnimatedResponse'

const SinglePrompt = ({ prompt }) => {
  const renderCards = (prompt) => {
    const cardStore = []
    for (let i = 0; i < prompt.responses.length; i++) {
      const card = (
        <AnimatedCard
          key={prompt.responses[i].id}
          response={prompt.responses[i]}
        />
      )
      cardStore.push(card)
    }
    return cardStore
  }
  return (
    <div
      key={prompt.id}
      DataclassName="card  max-w-11/12 relative mb-5 flex flex-col items-center justify-center rounded-lg   lg:m-2 lg:block  xl:w-11/12"
    >
      <h1 className="m-x-auto mb-3 mt-5 p-2 text-center text-3xl  font-bold">
        {prompt.title}{' '}
      </h1>
      <p className="m-x-auto text-2x1 text-1x1 mb-3 mt-5 p-2 text-center font-bold">
        {prompt.body}
      </p>
      <div>
        <button className="p2 z-10 m-4 mx-auto  flex w-min rounded-lg shadow">
          <p className="font-bold">Subscribe</p>
        </button>
        <div className="p2 z-10 mx-auto flex  w-max items-center gap-4 rounded-lg text-center shadow">
          <Link to={routes.directPromptResponse({ id: prompt.id })}>
            <p>Give my Response!</p>
          </Link>
        </div>
      </div>
      <div className="container flex justify-center">
        <article className="flex flex-wrap justify-center">
          {renderCards(prompt)}
        </article>
      </div>
    </div>
  )
}

export default SinglePrompt
