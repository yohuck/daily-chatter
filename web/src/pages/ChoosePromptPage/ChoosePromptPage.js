import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ChoosePromptCell from 'src/components/GetPromptsunderTopicCell'

const ChoosePromptPage = ({ id }) => {
  return (
    <>
      <MetaTags title="ChoosePrompt" description="ChoosePrompt page" />

      <ChoosePromptCell id={id} />
      <div className="my-5 flex justify-center">
        <Link to={routes.chooseTopic()}>
          <div className=" rounded-lg  bg-slate-100 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
            <p>Go Back</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ChoosePromptPage
