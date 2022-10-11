import { MetaTags } from '@redwoodjs/web'

import Responses from 'src/components/ResponsesUnderPromptCell'

const ResponsesToPromptPage = ({ id }) => {
  return (
    <>
      <MetaTags
        title="ResponsesToPrompt"
        description="ResponsesToPrompt page"
      />
      <Responses id={id} />
    </>
  )
}

export default ResponsesToPromptPage
