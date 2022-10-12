import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ResponsesUnderPrompt from 'src/components/ResponsesUnderPromptCell'

const ResponsesToPromptPage = ({ id }) => {
  return (
    <>
      <MetaTags
        title="ResponsesToPrompt"
        description="ResponsesToPrompt page"
      />
      <div>
        <Link to={routes.choosePrompt({ id: id })}>
          <p>Go Back</p>
        </Link>
      </div>
      <ResponsesUnderPrompt id={id} />
    </>
  )
}

export default ResponsesToPromptPage
