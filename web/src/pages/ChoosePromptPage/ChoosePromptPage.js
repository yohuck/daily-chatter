import { MetaTags } from '@redwoodjs/web'

import ChoosePromptCell from 'src/components/GetPromptsunderTopicCell'

const ChoosePromptPage = ({ id }) => {
  return (
    <>
      <MetaTags title="ChoosePrompt" description="ChoosePrompt page" />

      <ChoosePromptCell id={id} />
    </>
  )
}

export default ChoosePromptPage
