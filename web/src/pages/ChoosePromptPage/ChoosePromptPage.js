import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ChoosePromptCell from 'src/components/GetPromptsunderTopicCell'

const ChoosePromptPage = ({ id }) => {
  return (
    <>
      <MetaTags title="ChoosePrompt" description="ChoosePrompt page" />
      <div>
        <Link to={routes.chooseTopic()}>
          <p>Go Back</p>
        </Link>
      </div>
      <ChoosePromptCell id={id} />
    </>
  )
}

export default ChoosePromptPage
