import { MetaTags } from '@redwoodjs/web'

import PromptCell from 'src/components/Prompt/PromptCell'
import PromptInput from 'src/components/PromptInput/PromptInput'
export const QUERY = gql`
  query FindPromptById($id: Int!) {
    prompt: prompt(id: $id) {
      id
      title
      body
      topicId
      date
    }
  }
`
// const prompt = {
//   title: 'High or low rise?',
//   date: 'Monday 11/11',
//   body: 'Settle this once and for all. What jeans are the best?',
// }

const SubmitResponsePage = (prompt) => {
  return (
    <>
      <div className="grid place-items-center">
        <MetaTags title="SubmitResponse" description="SubmitResponse page" />
        <PromptCell id={1} key={prompt.id} prompt={prompt} />
      </div>
    </>
  )
}

export default SubmitResponsePage
