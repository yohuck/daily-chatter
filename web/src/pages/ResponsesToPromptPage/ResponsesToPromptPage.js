import { MetaTags } from '@redwoodjs/web'

import ResponsesUnderPrompt from 'src/components/ResponsesUnderPromptCell'

const ResponsesToPromptPage = ({ id }) => {
  return (
    <>
      <MetaTags
        title="ResponsesToPrompt"
        description="ResponsesToPrompt page"
      />
      <ResponsesUnderPrompt id={id} />
    </>
  )
}

export default ResponsesToPromptPage
