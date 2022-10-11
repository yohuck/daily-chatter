import { MetaTags } from '@redwoodjs/web'

import GetTopicsCell from 'src/components/GetTopicsCell'
import GetResponseCell from 'src/components/ResponseCardsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main className="flex flex-col items-center justify-center">
        <GetTopicsCell />
      </main>
    </>
  )
}

export default HomePage
