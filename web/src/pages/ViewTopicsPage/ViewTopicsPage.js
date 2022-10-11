import { MetaTags } from '@redwoodjs/web'

import ResponsesCell from 'src/components/ResponseCardsCell'

const ViewTopicsPage = () => {
  return (
    <div className="p-1 flex justify-center flex-wrap">
      <MetaTags title="ViewTopics" description="ViewTopics page" />

      <ResponsesCell />
    </div>
  )
}

export default ViewTopicsPage
