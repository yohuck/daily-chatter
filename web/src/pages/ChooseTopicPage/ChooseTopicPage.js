import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import OnlyTopicsCell from 'src/components/OnlyTopicsCell'
const ChooseTopicPage = () => {
  return (
    <>
      <MetaTags title="ChooseTopicPage" description="Choose Topic Page" />

      <main className="flex flex-col items-center justify-center">
        <OnlyTopicsCell />
      </main>
    </>
  )
}

export default ChooseTopicPage
