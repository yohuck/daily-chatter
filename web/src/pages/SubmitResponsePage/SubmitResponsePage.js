import { MetaTags } from '@redwoodjs/web'

import PromptInput from 'src/components/PromptInput/PromptInput'

const prompt = {
  title: "High or low rise?",
  date: "Monday 11/11",
  body: 'Settle this once and for all. What jeans are the best?',
}

const SubmitResponsePage = () => {
  return (
    <>
    <div className='grid place-items-center'>
      <MetaTags title="SubmitResponse" description="SubmitResponse page" />
      <PromptInput prompt={prompt} />
      </div>
    </>
  )
}

export default SubmitResponsePage
