import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DirectPromptResponse from 'src/components/DirectPromptResponseCell'

const DirectPromptResponsePage = ({ id }) => {
  return (
    <>
      <MetaTags
        title="DirectPromptResponse"
        description="DirectPromptResponse page"
      />
      <div>
        <Link to={routes.responsesToPrompt({ id: id })}>
          <p>Go Back</p>
        </Link>
      </div>
      <DirectPromptResponse id={id} />
    </>
  )
}

export default DirectPromptResponsePage
